import { useSelector } from '@redux'
import styled from 'styled-components/macro'
import useTranslation from '@hooks/useTranslation'
import bg from '@brand/assets/images/regionBlock/desktop/bg.png'
import logo from '@brand/assets/images/regionBlock/desktop/logo.png'
import accessRestricted from '@brand/assets/images/regionBlock/accessRestricted.png'
import chatBoxIcon from '@brand/assets/images/regionBlock/chat-box.png'
import chatIcon from '@brand/assets/images/regionBlock/icon-chat.png'
import phoneIcon from '@brand/assets/images/regionBlock/icon-phone.png'
import mailIcon from '@brand/assets/images/regionBlock/icon-mail.png'
import { IRegionBlockProps } from '@pages/regionBlock/types'

import bgImg from '@mixins/backgroundImg'
import { directToHomePage } from '@utils/v1Functions'

const BgColor = styled.div`
    background-color: #23170d;
    width: 100%;
    height: 100%;
`

const BgImg = styled.div`
    ${bgImg(bg, 'cover', 'no-repeat', '40% center')}
    height: 60%;
    width: 100%;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 53vw;
    top: 12vh;
    width: 500px;
`

const Logo = styled.div`
    ${bgImg(logo, 'contain')}
    height: 50px;
    width: 174px;
`

const Line = styled.hr`
    width: 100%;
    height: 1px;
    margin: 20px 0 0;
    border: none;
    background: linear-gradient(to left, transparent 5%, #b1a279 50%, transparent 95%);
`

const Description = styled.div`
    ${(props) => props.theme.typography.Body1};
    color: #ffffff;
    padding: 20px 14px 0;
`

const SpecialColorDescription = styled.span`
    ${(props) => props.theme.typography.Body1};
    color: #fff156;
`

const WarningText = styled.div`
    ${bgImg(accessRestricted, 'contain')}
    width: 100%;
    height: 45px;
    margin-top: 20px;
`

const IpText = styled(Description)`
    text-align: center;
    padding: 4px 0 0;
`

const CsBtn = styled.a`
    cursor: pointer;
    display: flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    width: 333px;
    height: 50px;
    border-radius: 40px;
    background-color: #d9b765;
    color: #ffffff;
    margin-top: 16px;
`

const CsIcon = styled.img`
    padding-right: 6px;
    height: fit-content;
`

const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 20px;
`

const Contact = styled.div`
    ${(props) => props.theme.typography.Body3};
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    width: 100%;
    padding-top: 4px;
`

const RegionBlock: React.FC<IRegionBlockProps> = ({ ip = '192.168.100.100' }) => {
    const t = useTranslation()
    const { complaintPhone, csPhone, csLink, webEmail } = useSelector((state) => state.app.brandInfo)

    const contacts = [
        {
            icon: chatIcon,
            title: t('regionBlock.contacts.csPhone'),
            content: csPhone,
        },
        {
            icon: phoneIcon,
            title: t('regionBlock.contacts.complaintPhone'),
            content: complaintPhone,
        },
        {
            icon: mailIcon,
            title: t('regionBlock.contacts.email'),
            content: webEmail,
        },
    ]

    return (
        <BgColor>
            <BgImg />
            <Container>
                <Logo onClick={directToHomePage} />
                <Line />
                <WarningText />
                <Description>
                    {t('regionBlock.dear')}:
                    <br />
                    {t('regionBlock.description.1')}
                    <SpecialColorDescription>{t('regionBlock.description.specialColor')}</SpecialColorDescription>
                    {t('regionBlock.description.2')}
                    <br />
                    {t('regionBlock.description.3')}
                </Description>
                <IpText>
                    {t('regionBlock.ipText')}：{ip}
                </IpText>
                <CsBtn href={csLink}>
                    <CsIcon src={chatBoxIcon} alt={t('regionBlock.cs')} />
                    {t('regionBlock.cs')}
                </CsBtn>
                <Contacts>
                    {contacts.map((contact) => {
                        return (
                            contact.content && (
                                <Contact key={contact.title}>
                                    <CsIcon src={contact.icon} alt={contact.title} />
                                    {contact.title}：{contact.content}
                                </Contact>
                            )
                        )
                    })}
                </Contacts>
            </Container>
        </BgColor>
    )
}

export default RegionBlock
