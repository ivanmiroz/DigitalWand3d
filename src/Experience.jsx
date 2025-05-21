import { Text3D, Text, Html, ContactShadows, PresentationControls, Environment, useGLTF, Float } from '@react-three/drei'
import { MeshBasicMaterial } from 'three';

export default function Experience()
{
    const computer = useGLTF('https://threejs-journey.com/resources/models/macbook_model.gltf')
    
    const goDW = () => {
        window.location.href = 'https://digitalwand.ru/#contacts';
    }

    return <>

        <Environment preset="city" />

        <color args={ [ '#241a1a' ] } attach="background" />

        <PresentationControls
            global
            rotation={ [0.13, 0.1, 0] }
            polar={ [-0.4, 0.2] }
            azimuth={ [-1, 0.75] }
            damping={ 0.1 }
        >
            <Float rotationIntensity={ 0.4 }>
                <rectAreaLight
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 65 }
                    color={ '#eee' }
                    rotation={ [ -0.1, Math.PI, 0 ] }
                    position={ [ 0, 0.55, -1.15 ] }
                />

                <primitive
                    object={ computer.scene }
                    position-y={ - 1.2 }
                    // position-x={ -0.9 }
                    // position-y={ -1.2 }
                    // rotation-x={ -0.3 }
                    // rotation-y={ -0.5 }
                    // rotation-z={ -0.2 }
                >
                    <Html
                        transform
                        wrapperClass="htmlScreen"
                        distanceFactor={ 1.17 }
                        position={ [-0.05, 1.56, -1.4] }
                        rotation-x={ -0.256 }
                    >
                        <iframe src="https://digitalwand.ru/" />
                    </Html>
                </primitive>
                    <Text3D
                        onPointerOver={() => document.body.style.cursor = 'pointer'}
                        onPointerOut={() => document.body.style.cursor = 'grab'}
                        onClick={ goDW }
                        font="./Montserrat_Bold.json"
                        size={ 0.3 }
                        height={ 0.1 }
                        curveSegments={ 12 }
                        position={ [2.5, 0.75, -1.75] }
                        rotation-y={ -1.25 }
                    >
                        {`Заказать 3D\nв DigitalWand\n«жмать»`}
                        <meshStandardMaterial color="white" />
                    </Text3D>
            </Float>
        </PresentationControls>

        <ContactShadows
            position-y={ -1.4 }
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 2.4 }
        />

    </>
}
