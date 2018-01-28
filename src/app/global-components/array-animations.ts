import { animate, state, style, transition, trigger } from '@angular/animations';
export const arrayAnimations = [trigger('layertitle', [
    state('on', style({
        transform: 'translateX(-120%)'
    })),
    state('off', style({
        transform: 'translateX(0%)'
    })),
    transition('on => off', animate('.6s 0.6s ease-in-out'))
]),
trigger('layersubtitle', [
    state('on', style({
        transform: 'translateX(400%)'
    })),
    state('off', style({
        transform: 'translateX(0%)'
    })),
    transition('on => off', animate('.6s 0.6s ease-in-out'))
]),
trigger('layerparagraph', [
    state('on', style({
        opacity: 0
    })),
    state('off', style({
        opacity: 1
    })),
    transition('on => off', animate('.6s 1.2s ease-in-out'))
]),
trigger('layertravels', [
    state('on', style({
        opacity: 0,
        // transform: 'translateX(-120%)'
    })),
    state('off', style({
        opacity: 1,
        // transform: 'translateX(0%)'
    })),
    transition('on => off', animate('0s 1s ease-in-out'))
]),
trigger('layertravels2', [
    state('on', style({
        opacity: 0,
        // transform: 'translateX(120%)'
    })),
    state('off', style({
        opacity: 1,
        // transform: 'translateX(0%)'
    })),
    transition('on => off', animate('0s 1.3s ease-in-out'))
]),
trigger('layertravels3', [
    state('on', style({
        opacity: 0,
        // transform: 'translateX(-120%)'
    })),
    state('off', style({
        opacity: 1,
        // transform: 'translateX(0%)'
    })),
    transition('on => off', animate('0.6s 1s ease-in-out'))
]),
trigger('layerparagraph2', [
    state('on', style({
        opacity: 0
    })),
    state('off', style({
        opacity: 1
    })),
    transition('on => off', animate('1.2s 1.2s ease-in-out'))
])
];

