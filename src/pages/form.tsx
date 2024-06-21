
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"

interface CreateFormData{
    name:string;
    email:string;
    request:string;
    comment:string;
}
export const Form = () => {
    const schema =yup.object().shape({
        name:yup.string().required("You must add a name"),
        email:yup.string().required("You must add a email"),
        request:yup.string().required("You must select a type of request"),
        comment:yup.string().required("You must add a comments"),
    });
    const {register,handleSubmit, formState:{errors}} = useForm<CreateFormData>({
        resolver : yupResolver(schema),
    })
    const onCreatePost = (data: CreateFormData) =>{
        console.log(data);
    };
  return (
    <div>
      <form>
      
        <label htmlFor="">Name :</label>
        <input type="text" placeholder="Name" {...register('name')}/>
        <br /><label htmlFor="">Email:</label>
        <input type="text" placeholder="Email"{...register('email')} />
        <br />
        <label htmlFor="">Request :</label>
        <select>
          <option value="General Queries">General Queries</option>
          <option value="Product Features Queries">Product Features Queries</option>
          <option value="Product Pricing Queries">Product Pricing Queries</option>
          <option value="Product Feature Implementation Requests">Product Feature Implementation Requests</option>
        </select>
        <br/>
        <label htmlFor="">Additional Comments :</label>
        {/* <br /> */}
        <textarea placeholder="Additional Comments"{...register('comment')} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
