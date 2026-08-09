import EmailForm from "./EmailForm";
import RegistrationForm from "./RegistrationForm";
import ExchancedForm from "./EnhancedForm";

function FormGroup() {
    return (
        <div className="forms-row">
            <EmailForm />
            <RegistrationForm />
            <ExchancedForm />
        </div>
    );
}

export default FormGroup;