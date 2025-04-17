import { useState } from "react";
import { useForm } from "react-hook-form";
import { CustomButton } from "../ui/button-library";
import { Input } from "../ui/input";
import { toast } from "../../hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Briefcase, Mail, User, Link as LinkIcon } from "lucide-react";

interface SignUpFormData {
  name: string;
  email: string;
  skillCategory: string;
  portfolioLink: string;
}

export const SignUpForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<SignUpFormData>();

  const onSubmit = async (data: SignUpFormData) => {
    setIsSubmitting(true);
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Success!",
      description: "Thank you for signing up. We'll be in touch soon!",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
        <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
          Join GigFloww
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/80">Full Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/50"
                        placeholder="John Doe"
                      />
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/80">Email Address</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        type="email"
                        className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/50"
                        placeholder="you@example.com"
                      />
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="skillCategory"
              rules={{ required: "Skill category is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/80">
                    Skill Category
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <div className="relative">
                        <SelectTrigger className="pl-10 bg-white/5 border-white/10 text-white">
                          <SelectValue placeholder="Select your main skill" />
                        </SelectTrigger>
                        <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
                      </div>
                    </FormControl>
                    <SelectContent className="bg-[#1a1b23] border-white/10">
                      <SelectItem
                        value="design"
                        className="text-white hover:bg-white/10"
                      >
                        Design
                      </SelectItem>
                      <SelectItem
                        value="development"
                        className="text-white hover:bg-white/10"
                      >
                        Development
                      </SelectItem>
                      <SelectItem
                        value="marketing"
                        className="text-white hover:bg-white/10"
                      >
                        Marketing
                      </SelectItem>
                      <SelectItem
                        value="writing"
                        className="text-white hover:bg-white/10"
                      >
                        Writing
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="portfolioLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/80">
                    Portfolio Link (Optional)
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/50"
                        placeholder="https://your-portfolio.com"
                      />
                      <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <CustomButton
              customVariant="gradient"
              type="submit"
              className="w-full py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing up..." : "Join Now"}
            </CustomButton>
          </form>
        </Form>
      </div>
    </div>
  );
};
