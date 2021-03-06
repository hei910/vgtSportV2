import FooterLogo1 from '@sport/assets/img/mobile/footer/footer-logo-1.png'
import FooterLogo2 from '@sport/assets/img/mobile/footer/footer-logo-2.png'
import FooterLogo3 from '@sport/assets/img/mobile/footer/footer-logo-3.png'
import FooterLogo4 from '@sport/assets/img/mobile/footer/footer-logo-4.png'
import React from 'react'
import styled from 'styled-components/macro'

const SFooterWrap = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
    align-items: center;
    flex-direction: column;
`

const SBrandWrap = styled.div`
    display: flex;
    width: 100%;

    &:before,
    &:after {
        content: '';
        flex: 1;
        height: 0;
        margin: auto;
        border: 1px solid ${(props) => props.theme.sport.colors.footer.border};
        display: inline-block;
    }
`

const SBrandLogo = styled.div`
    width: 12vh;
    max-width: 100px;
    margin: 0 20px;
`

const SLicenseWrap = styled.div`
    display: flex;
    justify-content: center;
`

const SLicenseContentWrap = styled.div`
    display: flex;
    flex-direction: column;
`

const SLicenseText = styled.span`
    color: #ddd;
    text-align: center;
    font-size: 11px;
    padding: 0 5px;
`

const SFooterBottomWrap = styled.div`
    padding: 15px 0;
    max-width: 500px;
    text-align: center;
`

const SFooterText = styled.span`
    color: #ddd;
    font-size: 12px;
    line-height: 1.25;
`

const SIconImg = styled.img`
    width: 80%;
    max-width: 90px;
    margin: 0 8px;
    margin-bottom: 10px;
`

const HG3535Footer: React.FC = () => {
    // const brand = useSelector((status) => status.player.brand);

    // const brandLogoMap: Dictionary<React.FC<React.SVGProps<SVGSVGElement>>> = {
    //     boc: BocBrandIcon,
    //     hangsang: HangSangBrandIcon,
    // };

    // const MBrandLogo = brandLogoMap[brand] ?? BrandLogo;

    return (
        <SFooterWrap>
            <SBrandWrap>
                <SBrandLogo>{/* <MBrandLogo /> */}</SBrandLogo>
            </SBrandWrap>
            <SLicenseWrap>
                <SLicenseContentWrap>
                    <SIconImg src={FooterLogo1} alt="Logo" />
                    <SLicenseText>??????GC</SLicenseText>
                    <SLicenseText>???????????????</SLicenseText>
                </SLicenseContentWrap>
                <SLicenseContentWrap>
                    <SIconImg src={FooterLogo2} alt="Logo" />
                    <SLicenseText>?????????????????????</SLicenseText>
                    <SLicenseText>(MGA)??????</SLicenseText>
                </SLicenseContentWrap>
                <SLicenseContentWrap>
                    <SIconImg src={FooterLogo3} alt="Logo" />
                    <SLicenseText>?????????????????????</SLicenseText>
                    <SLicenseText>(BVI)??????</SLicenseText>
                </SLicenseContentWrap>
                <SLicenseContentWrap>
                    <SIconImg src={FooterLogo4} alt="Logo" />
                    <SLicenseText>?????????(PAGCOR)</SLicenseText>
                    <SLicenseText>??????????????????</SLicenseText>
                </SLicenseContentWrap>
            </SLicenseWrap>
            <SFooterBottomWrap>
                <SFooterText>
                    ????????????????????????????????????(MGA)?????????GC???????????????(Gambling Commission)?????????????????????????????????(pagcor)
                    ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????18?????????
                </SFooterText>
            </SFooterBottomWrap>
        </SFooterWrap>
    )
}

export default HG3535Footer
