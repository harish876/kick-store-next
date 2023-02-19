import { Suspense } from "react"
import ShoeModel from "./ShoeModel"
import NewBalance997 from './NewBalance997'
import JordanModel from './JordansModel'
import NikeAirPegasusModel from './NikeAirPegasusModel'
import VansModel from './VansModel'
import { Spin } from 'antd';

import { get } from "lodash"

export default function RenderModel(props) {

    const key = get(props,'props',"NewBalance997")
    return (
        <>
            {['NewBalance997'].includes(key) &&
            <Suspense fallback={null}>
                <NewBalance997 />
            </Suspense>}

            {['Vans'].includes(key) &&
            <Suspense fallback={<Spin />}>
                <VansModel />
            </Suspense>}

            {['NikeAirPegasus'].includes(key) &&
            <Suspense fallback={<Spin />}>
                <NikeAirPegasusModel />
            </Suspense>}

            {['Jordan'].includes(key) &&
            <Suspense fallback={<Spin />}>
                <JordanModel />
            </Suspense>}

            {['Fila'].includes(key) &&
            <Suspense fallback={<Spin />}>
                <ShoeModel 
                    chooseCustomModel={props.chooseCustomModel}
                />
            </Suspense>}
        </>
    );
}


