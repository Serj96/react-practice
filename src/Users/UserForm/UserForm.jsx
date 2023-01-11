import { useState, useMemo } from 'react';
import { nanoid } from 'nanoid';

export const UserForm = ({ onHandleSubmit, users }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChangeName = event => {
    const { value } = event.target;
    setName(value);
  };

  const handleChangePhone = event => {
    const { value } = event.target;
    setPhone(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onHandleSubmit({ name, phone });
    setName('');
    setPhone('');
  };

  // const nameInputId = nanoid();
  // const phoneInputId = nanoid();

  const nameInputId = useMemo(() => nanoid(), []);
  const phoneInputId = useMemo(() => nanoid(), []);

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>Name </label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChangeName}
        id={nameInputId}
      />
      <label htmlFor={phoneInputId}>Phone </label>
      <input
        type="tel"
        name="phone"
        value={phone}
        onChange={handleChangePhone}
        id={phoneInputId}
      />
      <button type="submit">Add user</button>
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
