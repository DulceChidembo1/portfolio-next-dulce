import { Mail, MailIcon, MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const contactPage = () => {
  return (
    <>
      <div className="container maz-w-7xl mx-auto p-20">
        <h1 className="text-3xl font-bold mb-5 text-center">Contact-me</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-900 md:w-2/3 m-4">
            I'm available for opportunities as a junior fullstack developer.
            Feel free to reach out to collaborate or chat about tech!
          </p>
          <div>
            <div className=" flex items-center gap-4">
              <MailIcon className="w-6 h-6 text-blue-500" />
              <div>
                <h3 className="text-semibold">Email</h3>
                <link
                  href="mailto:dulcechidembue@gmail.com"
                  className="text-blue-600"
                />
                dulcechidembue@gmail.com
              </div>
            </div>
            <div className=" flex items-center gap-4">
              <Phone className="w-6 h-6 text-blue-500" />
              <div>
                <h3 className="text-semibold">Phone</h3>
                <link href="tel:+25884525702" className="text-blue-600" />
                +258 84525702
              </div>
            </div>
            <div className=" flex items-center gap-4">
              <MapPin className="w-6 h-6 text-blue-500" />
              <div>
                <h3 className="text-semibold">Location</h3>
                <p>Maputo, Mozambique</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Card className="w-full max-w-md shadow-2xl border-none bg-white/90 dark:bg-[#232c47] dark:text-white">
            <CardContent>
              <form>
                <div className="flex flex-col gap-5">
                  <div className="grid gap-2">
                    <Label htmlFor="name">
                      <span className="font-bold">Name</span>{" "}
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      className="rounded-md border border-blue-700 focus:ring-2 focus:ring-blue-400 bg-white dark:bg-[#28335a] dark:text-white dark:border-blue-400"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">
                      <span className="font-bold">E-mail</span>{" "}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="rounded-md border border-blue-700 focus:ring-2 focus:ring-blue-400 bg-white dark:bg-[#28335a] dark:text-white dark:border-blue-400"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="subject">
                      <span className="font-bold">Subject</span>{" "}
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      required
                      className="rounded-md border border-blue-700 focus:ring-2 focus:ring-blue-400 bg-white dark:bg-[#28335a] dark:text-white dark:border-blue-400"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">
                      <span className="font-bold">Description</span>{" "}
                    </Label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      required
                      className="rounded-md border border-blue-700 focus:ring-2 focus:ring-blue-400 bg-white py-2 px-4"
                    />
                  </div>
                </div>
                <CardFooter className="flex-col gap-2 px-0">
                  <Button
                    type="submit"
                    className="w-full mt-6 rounded-full bg-blue-900 text-white font-semibold hover:scale-105 hover:bg-blue-800 transition"
                  >
                    Submit
                  </Button>
                </CardFooter>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default contactPage;
