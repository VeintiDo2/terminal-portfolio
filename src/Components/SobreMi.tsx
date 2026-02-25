import ModelViewer from "./3D/ModelViewer";
import { useEffect, useState } from "react";
import { Icons } from "../Components/Data/IconsComponent";

const SobreMi = ({ hasShownRef }: { hasShownRef: React.MutableRefObject<boolean> }) => {

    type SpanProps = {
        title: string;
        description: string;
    }

    const CustomParagraph = ({ title, description }: SpanProps) => {
        return (
            <p>{title}: <span className="text-white">{description}</span></p>
        );
    }

    const [canShowCanvas, setCanShowCanvas] = useState<boolean>(false);

    useEffect(() => {
        // Si el usuario ya ha entrado, evitamos el retraso a la hora de mostrar el modelo.
        if (hasShownRef.current) {
            setCanShowCanvas(true);
            return;
        }

        hasShownRef.current = true;

        // Timeout para esperar a que se monte el componente y evitar tamaños incorrectos del canvas.
        setTimeout(() => {
            setCanShowCanvas(true);
        }, 3000);

    }, []);

    return (
        <div className="flex flex-col size-full p-2 gap-5">
            <article className="flex flex-row gap-5">
                <aside className="flex flex-col w-70 gap-3 items-center border p-2">
                    <img src="src\assets\images\Havoc 002 - copia.png" alt="perfil images"
                        className="flex items-center justify-center aspect-auto object-cover" />
                    <div className="flex flex-col">
                        <span className="border-b border-dashed pb-1">Perfil de Usuario</span>
                        <div className="pt-3">
                            <CustomParagraph title="Nombre" description="Jason" />
                            <CustomParagraph title="Rol" description="Estudiante de ingenieria de sistemas" />
                            <CustomParagraph title="Enfoque" description="FrontEnd" />
                            <CustomParagraph title="Estado" description="[ DESCONOCIDO ]" />
                        </div>
                    </div>
                </aside>
                <div className="flex flex-col flex-1 gap-5">
                    <div className="flex flex-col border p-2">
                        <span>Description:</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit veniam iure minus perferendis,
                        exercitationem ducimus assumenda laudantium voluptate impedit hic aliquam debitis placeat quidem
                        obcaecati totam nam delectus veritatis a.
                    </div>
                    <div className="flex flex-row flex-1 gap-5">
                        <div className="border p-2 grow">
                            [ En proceso ]
                        </div>
                        <div className="relative flex-1 min-h-65 border overflow-hidden">
                            <div className="absolute top-1 right-1 w-10 animate-pulse">{Icons.warning}</div>
                            {canShowCanvas && <ModelViewer url="src\assets\3DModels\Craneo.glb" canAutoRotate={true} canZoom={false} canRotate={false} canPan={false} isWireframeVisible={true} canShowCanvas={canShowCanvas} />}
                        </div>
                    </div>
                </div>
            </article>
            <article className="grow border p-2">
                [ En proceso ]
            </article>
        </div>
    )
}

export default SobreMi;