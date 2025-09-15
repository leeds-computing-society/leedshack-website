"use client";
import { ScreenQuad, shaderMaterial } from "@react-three/drei";
import { ShaderMaterial, Vector3 } from "three";
import { extend, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

import fragmentShader from "../static/background-gradient.frag";
import vertexShader from "../static/background-gradient.vert";
import { usePathname } from "next/navigation";

type Uniforms = {
    time: number;
    colour2: Vector3;
};

let initialUniforms: Uniforms = {
    time: 0,
    colour2: new Vector3(0.45098039215686275, 0.01568627450980392, 0.6509803921568628)
};

export const BackgroundGradientMaterial = shaderMaterial(initialUniforms, vertexShader, fragmentShader);

extend({ BackgroundGradientMaterial });

declare module "@react-three/fiber" {
    interface ThreeElements
    {
        backgroundGradientMaterial: any;
    }
};

export const BackgroundGradient = () =>
{
    let pathname = usePathname();
    let [targetColour, setTargetColour] = useState<Vector3>(new Vector3(0.45098039215686275, 0.01568627450980392, 0.6509803921568628));
    const gradientShader = useRef<ShaderMaterial & Partial<Uniforms>>(null);

    const calculateNewValue = (target: number, current: number): number =>
    {
        let difference = Math.abs(target - current);
        if (target > current) return current + difference * 0.1;
        return current - difference * 0.1;
    };

    useFrame(({ clock }) =>
    {
        if (!gradientShader.current) return;
        gradientShader.current.time = clock.elapsedTime * 0.1;
        if (gradientShader.current.colour2 === undefined) return;
        console.log(targetColour.x, gradientShader.current.colour2.x);
        let newX = calculateNewValue(targetColour.x, gradientShader.current.colour2.x);
        let newY = calculateNewValue(targetColour.y, gradientShader.current.colour2.y);
        let newZ = calculateNewValue(targetColour.z, gradientShader.current.colour2.z);
        gradientShader.current.colour2 = new Vector3(newX, newY, newZ);
    });

    useEffect(() =>
    {
        if (pathname === "/2025") return setTargetColour(new Vector3(0.0, 0.38823529411764707, 0.34509803921568627));
        if (pathname !== "/2025") return setTargetColour(new Vector3(0.45098039215686275, 0.01568627450980392, 0.6509803921568628));
    }, [pathname]);

    return (
        <ScreenQuad>
            <backgroundGradientMaterial
                key={BackgroundGradientMaterial.key}
                ref={gradientShader}
                time={0}
            />
        </ScreenQuad>
    );
};