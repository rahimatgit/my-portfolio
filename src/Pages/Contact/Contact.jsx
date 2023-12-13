
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Title from "../../Shared/Title";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_rsr53yd",
                "template_mtnl6kr",
                form.current,
                "zN1hJrlk5nc2fyjtx"
            )
            .then(
                (result) => {
                    console.log(result);
                    if (result.status === 200) {
                        toast.success("Email Sent");
                        e.target.reset();
                    }
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div id="contact" className="my-10 w-4/5 mx-auto">
            <Title heading="Contact Me"></Title>
            <form
                ref={form}
                onSubmit={sendEmail}
                className="w-full lg:w-3/5 mx-auto space-y-4 px-3 py-4 card "
            >
                <div>
                    <label className="label label-text text-white">Name</label>
                    <input
                        type="text"
                        name="user_name"
                        className="input input-primary input-bordered w-full bg-stone-100 text-gray-800"
                    />
                </div>
                <div>
                    <label className="label label-text text-white">Email</label>
                    <input
                        type="email"
                        name="user_email"
                        className="input input-primary input-bordered w-full bg-stone-100 text-gray-800"
                    />
                </div>
                <div>
                    <label className="label label-text text-white">Message</label>
                    <textarea
                        className="textarea textarea-bordered w-full textarea-primary bg-stone-100 text-gray-800"
                        name="message"
                    />
                </div>
                <input
                    type="submit"
                    value="Send"
                    className="btn btn-success btn-block text-white"
                />
            </form>
        </div>
    );
};

export default Contact;