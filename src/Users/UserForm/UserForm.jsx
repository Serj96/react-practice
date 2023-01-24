import { useMemo } from 'react';
import { nanoid } from 'nanoid';
import useForm from 'hooks/useForm';
import { Input, Label, Button } from './UserForm.styled';
// import { useContext } from 'react';
// import { LangContext } from 'context/context';
import content from '../../content/content.json';
import useLang from 'hooks/useLang';

const initialState = { name: '', number: '' };

export const UserForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  // const [state, setState] = useState(initialState);

  // const handleChange = event => {
  //   const { value, name } = event.target;
  //   setState(prevState => ({ ...prevState, [name]: value }));
  // };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   onSubmit(state);
  //   setState(initialState);
  // };

  // const { lang } = useContext(LangContext);

  const { lang } = useLang();
  const nameInputId = useMemo(() => nanoid(), []);
  const phoneInputId = useMemo(() => nanoid(), []);

  const { name, number } = state;

  return (
    <form action="" onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>{content.name[lang]}</Label>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        id={nameInputId}
      />
      <Label htmlFor={phoneInputId}>{content.phone[lang]}</Label>
      <Input
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        id={phoneInputId}
      />
      <Button type="submit">{content.add[lang]}</Button>
    </form>
  );
};

// class orUserForm extends Component {
//     state = {
//     name: "",
//     phone: "",
//     };

//     handleChange = (event) => {
//         const { name, value } = event.target;
//         this.setState({ [name]: value });
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         this.props.onHandleSubmit(this.state);
//         this.setState({ name: "", phone: ""})
//     }

//     render() {
//         const {name, phone} = this.state
//         return (
//         <form action="" onSubmit={this.handleSubmit}>
//           <label htmlFor="">
//             Name{" "}
//             <input
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleChange}
//             />
//           </label>
//           <label htmlFor="">
//             Phone{" "}
//             <input
//               type="tel"
//               name="phone"
//               value={phone}
//               onChange={this.handleChange}
//             />
//           </label>
//           <button type="submit">Add user</button>
//         </form>
//         )
//     }
// }

// export default UserForm;
