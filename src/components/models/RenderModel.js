import { Suspense } from "react"
import ShoeModel from "./ShoeModel"
import NewBalance997 from './NewBalance997'
import JordanModel from './JordansModel'
import NikeAirPegasusModel from './NikeAirPegasusModel'
import VansModel from './VansModel'
import Loading from '@/components/utils/loading'

import { get } from "lodash"
export default function RenderModel(props) {

    const key = get(props,'props',"NewBalance997")
    return (
        <>
            {['NewBalance997'].includes(key) &&
            <Suspense fallback={<Loading/>}>
                <NewBalance997/>
            </Suspense>}

            {['Vans'].includes(key) &&
            <Suspense fallback={<Loading/>}>
                <VansModel />
            </Suspense>}

            {['NikeAirPegasus'].includes(key) &&
            <Suspense fallback={<Loading/>}>
                <NikeAirPegasusModel />
            </Suspense>}

            {['Jordan'].includes(key) &&
            <Suspense fallback={<Loading/>}>
                <JordanModel />
            </Suspense>}

            {['Fila'].includes(key) &&
            <Suspense fallback={<Loading/>}>
                <ShoeModel 
                    chooseCustomModel={props.chooseCustomModel}
                />
            </Suspense>}
        </>
    );
}


