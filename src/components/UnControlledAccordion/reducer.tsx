import React from "react";

export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED';

export type CollapsedType = {
    isCollapsed: boolean
}

type CollapsedActionType = {
    type: string
}

const collapsedReducer = (state: CollapsedType, action: CollapsedActionType): CollapsedType => {

    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {
                ...state,
                isCollapsed: !state.isCollapsed
            }
        default:
            throw new Error('Bad type action!');

    }

}

export default collapsedReducer;