import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CalendarIcon, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const reservationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Внесете најмалку 2 знаци" })
    .max(100, { message: "Максимум 100 знаци" }),
  guests: z
    .string()
    .min(1, { message: "Изберете број на лица" }),
  phone: z
    .string()
    .trim()
    .min(5, { message: "Внесете валиден телефонски број" })
    .max(30)
    .regex(/^[+\d\s()-]+$/, { message: "Невалиден формат" }),
  email: z
    .string()
    .trim()
    .email({ message: "Внесете валидна email адреса" })
    .max(255),
  date: z.date({ message: "Изберете датум" }),
  time: z
    .string()
    .min(1, { message: "Изберете време" })
    .regex(/^\d{2}:\d{2}$/, { message: "Невалиден формат" }),
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

interface ReservationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ReservationModal = ({ open, onOpenChange }: ReservationModalProps) => {
  const [success, setSuccess] = useState(false);

  const form = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      fullName: "",
      guests: "",
      phone: "",
      email: "",
      time: "",
    },
  });

  const onSubmit = (values: ReservationFormValues) => {
    const subject = "Нова резервација — Бриони";
    const body = [
      `Име: ${values.fullName}`,
      `Број на лица: ${values.guests}`,
      `Телефон: ${values.phone}`,
      `Email: ${values.email}`,
      `Датум: ${format(values.date, "dd.MM.yyyy")}`,
      `Време: ${values.time}`,
    ].join("\n");

    window.location.href = `mailto:filipralev@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSuccess(true);
    form.reset();
    toast.success("Вашата резервација е успешно испратена!");
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      // reset on close
      setTimeout(() => {
        setSuccess(false);
        form.reset();
      }, 200);
    }
    onOpenChange(next);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[520px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            Резервација на маса
          </DialogTitle>
          <DialogDescription>
            Пополнете ги полињата подолу и ќе ве контактираме за потврда.
          </DialogDescription>
        </DialogHeader>

        {success ? (
          <div className="flex flex-col items-center text-center py-8 gap-4">
            <CheckCircle2 className="h-16 w-16 text-primary" />
            <h3 className="font-display text-xl">
              Вашата резервација е успешно испратена!
            </h3>
            <p className="text-muted-foreground text-sm">
              Ви благодариме. Наскоро ќе ве контактираме за потврда.
            </p>
            <Button onClick={() => handleOpenChange(false)} className="mt-2">
              Затвори
            </Button>
          </div>
        ) : (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 pt-2"
            >
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Име и презиме</FormLabel>
                    <FormControl>
                      <Input placeholder="Марко Марковски" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="guests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Број на лица</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Избери" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Array.from({ length: 20 }, (_, i) => i + 1).map(
                            (n) => (
                              <SelectItem key={n} value={String(n)}>
                                {n} {n === 1 ? "лице" : "лица"}
                              </SelectItem>
                            ),
                          )}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Телефонски број</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+389 7X XXX XXX"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="vie@email.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Датум</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? (
                                format(field.value, "dd.MM.yyyy")
                              ) : (
                                <span>Избери датум</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto p-0"
                          align="start"
                        >
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => {
                              const today = new Date();
                              today.setHours(0, 0, 0, 0);
                              return date < today;
                            }}
                            initialFocus
                            className={cn("p-3 pointer-events-auto")}
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Време</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" className="w-full mt-2" size="lg">
                Потврди резервација
              </Button>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ReservationModal;
