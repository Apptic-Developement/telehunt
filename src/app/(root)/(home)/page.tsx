import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const DialogBabu = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='mt-3 ml-3'>Edit Profile</Button>
      </DialogTrigger>
 
      <DialogContent className="sm:max-w-[425px] border-none bg-secondary backdrop-blur rounded-lg">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
};

export default function () {
  return (
    <div className="container">
      <DialogBabu />


     <div className="flex flex-col gap-3 text-center items-center mx-auto text-2xl font-bold">
      <h1 className='text-accent-foreground bg-accent'>Hello Lund!</h1>
      <h1>Hello Lund!</h1>
      <h1>Hello Lund!</h1>
      <h1>Hello Lund!</h1>
      <h1>Hello Lund!</h1>
     </div>
    </div>
  )
};
