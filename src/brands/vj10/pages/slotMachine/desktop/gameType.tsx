import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { GameTypeItemCss, GameTypeListCss, GameTypeIconCss, GameTypeIconBgImgCss } from '@components/common/gameType'
import GameTypeIconsImg from '@brand/assets/images/slotMachine/desktop/game-type-icons.png'
import useGameType from '@components/common/gameType/hook'

const GameTypeList = styled.div`
    ${GameTypeListCss('nowrap')}
`

const GameTypeIcon = styled.div<{ index: number }>`
    ${GameTypeIconCss(31, 31)}
    ${(props) => GameTypeIconBgImgCss(GameTypeIconsImg, 31, 31, props.index, true)}
`

const GameTypeTitle = styled.div`
    ${(props) => props.theme.typography.Body2}
    margin-top: 5px;
    color: #ffffff;
`

const GameTypeItem = styled(Link)`
    ${GameTypeItemCss(6)}
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    &.active {
        background-image: linear-gradient(to bottom, #fe9900, #d16800);
    }
`

const SGameType: React.FC<{}> = () => {
    const gameTypes = useGameType()
    return (
        <GameTypeList>
            {gameTypes.map((gameType, idx) => {
                return (
                    <GameTypeItem className={gameType.className} key={`game-type-${gameType.title}`} to={gameType.to}>
                        <GameTypeIcon index={idx} className={gameType.className} />
                        <GameTypeTitle>{gameType.title}</GameTypeTitle>
                    </GameTypeItem>
                )
            })}
        </GameTypeList>
    )
}

export default SGameType
