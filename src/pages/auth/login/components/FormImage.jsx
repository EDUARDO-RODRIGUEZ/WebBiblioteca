import React, { useState, useRef, useCallback } from 'react'
import { Animated } from 'react-animated-css'
import Webcam from "react-webcam";
import perfil from '../../../../assets/perfil.png';
import { dataURItoBlob } from '../../../../helpers/helper';

const videoConstraints = {
    facingMode: "user"
};

const FormImage = () => {

    const [play, setPlay] = useState(false);
    const webcamRef = useRef(null);
    const imageRef = useRef(null);

    const [file, setfile] = useState(null);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        imageRef.current.src = imageSrc;
        const file = new File([dataURItoBlob(imageSrc)], `${new Date().getTime()}.png`, {
            type: "image/png"
        });
        console.log(file)
        setPlay((p) => !p);
    }, [webcamRef]);

    return (
        <Animated animationIn="bounceInRight" animationInDuration={1000} isVisible={true}>
            <div>

                <div className='flex justify-center' style={{ height: 200 }}>
                    {play &&
                        (
                            <div className={"rounded-xl overflow-hidden"}>
                                <Webcam
                                    audio={false}
                                    height={300}
                                    ref={webcamRef}
                                    screenshotFormat="image/jpeg"
                                    width={300}
                                    videoConstraints={videoConstraints}
                                />
                            </div>
                        )
                    }

                    <div className={`${play ? "hidden" : "block"}`}>
                        <img height={300} ref={imageRef} src={perfil} alt={"image"} className={"h-full rounded-xl overflow-hidden "} />
                    </div>
                </div>

                <div className={"px-5 text-center mt-1"}>
                    {play && <button onClick={capture} className="btn btn-xs">Capture</button>}
                </div>

                <form className={"p-2"}>
                    <div className={"px-5"}>
                        <label className="label">
                            <small className="label-text">Image Perfile</small>
                        </label>
                        <div className={"grid grid-cols-4 gap-3 text-center"}>
                            <input type="file" className="file-input file-input-sm col-span-3" />
                            <div>
                                <label className="label">
                                    <small className="label-text">camara</small>
                                    <input type="checkbox" onChange={() => {
                                        imageRef.current.src = perfil;
                                        setPlay(!play)
                                    }} checked={play} className="checkbox" />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className={"px-4 mt-3"}>
                        <button className="btn  btn-sm btn-primary">Login</button>
                    </div>
                </form>

            </div>
        </Animated>
    )
}

export default FormImage