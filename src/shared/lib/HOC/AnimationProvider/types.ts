export type GestureType = typeof import('@use-gesture/react');
export type SpringType = typeof import('@react-spring/web');
export interface AnimationContextPayload {
    Gesture?: GestureType;
    Spring?: SpringType;
    isLoaded?: boolean;
}
