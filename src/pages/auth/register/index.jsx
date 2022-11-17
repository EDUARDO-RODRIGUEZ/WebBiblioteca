import React from 'react'
import svgwave from '../../../assets/wave.svg';

const Register = () => {

  function OnSubmit(params) {

  }

  return (
    <div className={"flex h-screen justify-center items-center"}>
      <div style={{ width: 450, minHeight: 360 }} className={"relative rounded-md shadow-2xl bg-white overflow-hidden"} >
        <div>
          <form onSubmit={OnSubmit} className={"p-2"}>
            <div>
              <h1 className={"text-xl text-center font-bold"}>Register</h1>
            </div>

            <div className={"px-5"}>
              <label className="label">
                <small className="label-text">Nombre</small>
              </label>
              <input
                type="text"
                placeholder="nombre"
                className="input input-sm w-full bg-theme-box"
                required
                minLength={3}
              />
            </div>

            <div className={"px-5"}>
              <label className="label">
                <small className="label-text">Email</small>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-sm w-full bg-theme-box"
                required
              />
            </div>

            <div className={"px-5"}>
              <label className="label">
                <small className="label-text">Password</small>
              </label>
              <input
                type="password"
                placeholder="********"
                name={"password"}
                className="input input-sm w-full bg-theme-box"
                minLength={8}
                required
              />
            </div>

            <div className={"px-5"}>
              <label className="label">
                <small className="label-text">Imagen Perfil</small>
              </label>
              <input
                type="file"
                className="file-input file-input-sm  w-full"
                required
                accept="image/*"
              />
            </div>

            <div className={"px-4 mt-5"}>
              <button className="btn  btn-sm btn-primary">Registrar</button>
            </div>

          </form>
        </div>

        <div className={"h-20"} ></div>

        <div className='absolute bottom-0 w-full drop-shadow-2xl mt-1'>
          <img className={"object-cover h-20 w-full "} src={svgwave} alt="svg image" />
        </div>
      </div>
    </div>
  )
}

export default Register