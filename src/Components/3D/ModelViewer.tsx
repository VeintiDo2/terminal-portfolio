import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";


const Model = ({ url, isWireframeVisible }: { url: string, isWireframeVisible?: boolean }) => {
    const gltf = useGLTF(url);

    useEffect(() => {
        gltf.scene.traverse((child: any) => {
            if (child.isMesh) {
                child.material = child.material.clone();
                child.material.wireframe = isWireframeVisible;
                child.material.color.set("#00ff66");
            }
        });
    }, [gltf, isWireframeVisible]);

    return <primitive object={gltf.scene} />;
};

const ModelViewer = ({ url, canAutoRotate, canZoom, canRotate, canPan, isWireframeVisible, canShowCanvas }:
    {
        url: string, canAutoRotate: boolean, canZoom: boolean, canRotate: boolean,
        canPan: boolean, isWireframeVisible?: boolean, canShowCanvas: boolean,
    }) => {

    const [canShowModel, setCanShowModel] = useState<boolean>(false);

    useEffect(() => {
        if (canShowCanvas) {
            setTimeout(() => {
                setCanShowModel(true);
            }, 250)
        }
    }, [canShowCanvas])

    if (!url) return <span className="text-red-400">Modelo no disponible</span>;

    return (
        <div className={`${canShowModel ? "animate-fade-in" : ""} opacity-0 relative size-full overflow-hidden`}>

            <Canvas camera={{ position: [10, 1, 1], fov: 2 }}>
                <Suspense fallback={null}>

                    <Environment preset="lobby" />
                    {url ? <Model url={url} isWireframeVisible={isWireframeVisible} /> : null}
                    <OrbitControls autoRotate={canAutoRotate}
                        enableZoom={canZoom}
                        enableRotate={canRotate}
                        enablePan={canPan}
                    />

                </Suspense>
            </Canvas>
        </div >
    );
};

export default ModelViewer;
