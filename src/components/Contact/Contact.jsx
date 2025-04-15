import { IoPerson, IoCallSharp } from "react-icons/io5";

export default function Contact({ contact, onDelete }) {
  return (
    <div>
      <div>
        <p>
          <IoPerson /> {contact.name}
        </p>
        <p>
          <IoCallSharp />
          {contact.number}
        </p>
      </div>

      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
}
