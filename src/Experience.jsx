import { Physics } from '@react-three/rapier'
import useGame from './stores/useGame.jsx'
import Lights from './Lights.jsx'
import { Level } from './Level.jsx'
import Player from './Player.jsx'

export default function Experience()
{
    const blocksCount = useGame((state) => state.blocksCount)
    const blocksSeed = useGame(state => state.blocksSeed)

    return <>

        <color args={ [ '#11edfc' ] } attach="background" />

        <Physics debug={ false }>
            <Player />

            <Level count={ blocksCount } seed={ blocksSeed } />
            <Lights />

        </Physics>

    </>
}