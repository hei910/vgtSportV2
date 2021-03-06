import { useMemo, useEffect } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'

interface IMatch {
    [k: string]: string
}

//only support two params tab. params must be named as tab1 tab2
const useTabs = (params: string[]) => {
    const match = useRouteMatch<IMatch>()
    const history = useHistory()

    const baseUrl = useMemo(() => {
        const urls = match.path.split(':')
        let urlWithoutParams = urls[0]

        return urlWithoutParams
    }, [match])

    const tabs = useMemo(() => {
        return params.map((param) => ({
            param,
            to: `${baseUrl}${param}`,
            isActive: match.url.replace(baseUrl, '').includes(param),
        }))
    }, [baseUrl, match.url, params])

    const noParam = useMemo(() => {
        const existedParam = Object.values(match.params).find((param) => {
            if (param !== undefined || param !== null) {
                return true
            }
            return false
        })

        if (existedParam) {
            return false
        } else {
            return true
        }
    }, [match.params])

    useEffect(() => {
        if (noParam) {
            history.push(`${baseUrl}${params[0]}`)
        }
    }, [baseUrl, history, match.params, noParam, params])

    return tabs
}

export default useTabs
