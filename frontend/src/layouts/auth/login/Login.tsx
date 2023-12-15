import { Link, NavLink } from "react-router-dom";
import bgImg from '../../../assets/../images/img1.png';
import { useForm } from 'react-hook-form';

export function Login (){

  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data: any) => console.log(data);

  return (
   <section className="h-full mx-auto py-20 gap-8">
        <div className="flex flex-col h-auto lg:flex-row justify-center bg-green-600 text-2xl items-center lg:px-32 px-5 gap-12 mb-10">
        <img className="sm:7/12 lg:w-10/12 mt-2" src={bgImg} alt="" />
            <div className="space-y-3 lg:pt-14">
                <h2 className="flex flex-row mx-auto text-center text-black justify-center items-center font-semibold text-2xl px-26">Inicio sesion</h2>
                <span className="text-xl text-black">Disfruta de nuestros servicios</span>

                <form id='form' className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
                    <input className="border-2 border-green-500 rounded-md" type="email" {...register("username")} placeholder=' email' />
                    <input className="border-2 border-green-500 rounded-md" type="text" {...register("password")} placeholder=' contraseña' />
                    <input className="border-2 border-green-500 rounded-md" type="text" {...register("confirmpwd")} placeholder=' confirmar contraseña' />
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <button className='btn mx-auto text-sm font-bold border-2 border-black bg-black px-20 py-2 mt-4 mb-10 rounded-full text-white hover:text-black'>Inicio sesion</button>
                </form>
                <div className="text-start mb-4">
                <Link to="/register" className="text-sm p-2 py-3 ">No tengo una cuenta <button><span className="text-black font-bold">Registrarse</span></button>
                </Link>
                <NavLink to="/" className="text-sm  text-black font-bold"><button>cerrar</button></NavLink>
                </div>
                <br></br>
            </div>
          </div>
      </section>
  )           
}

export default Login;