import Step1 from './stepsRegister/FirstForm';
import Step2 from './stepsRegister/SecondForm';
import Step3 from './stepsRegister/ThirdForm';

const signup = () => {


    const { step } = this.state;
    const { email, username, password, firstName, lastName, country } = this.state;
    const values = { email, username, password, firstName, lastName, country }

    prevStep = () => {
      const { step } = this.state;
      this.setState({ step: step - 1 })
    }

    nextStep = () => {
      const { step } = this.state;
      this.setState({ step: step - 1 })
    }

    handleChange = input => e => {
      const { step } = this.state;
      this.setState({ [input]: e.target.value })
    }

    switch (step) {
      case 1:
        return (
          <Step1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <Step2
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <Step3
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        )
    }
}

export default signup;