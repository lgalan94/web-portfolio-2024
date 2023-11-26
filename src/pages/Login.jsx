import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import {
  Logo
} from '../components'
 
const Login = () => {
  return (
    <div className="flex relative flex-col h-screen justify-center items-center bg-defaultColor">
      <Typography className="text-3xl mb-5 uppercase font-semibold p-5">Admin Login</Typography>
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography 
            variant="h3" 
            color="white"
            className="uppercase"
            >
            <Logo className="text-3xl" />
            
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" size="lg" />
          <Input label="Password" size="lg" />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
            Login
          </Button>
          
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login