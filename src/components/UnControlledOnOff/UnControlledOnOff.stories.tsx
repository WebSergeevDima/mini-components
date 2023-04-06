import React, {useState} from 'react';
import UnControlledOnOff from "./UnControlledOnOff";

export default {
    title: 'UnControlledOnOff',
    component: UnControlledOnOff,
}

export const TrueOnOff = () => <UnControlledOnOff defaultOn={true} />;

export const FalseOnOff = () => <UnControlledOnOff defaultOn={false} />;
