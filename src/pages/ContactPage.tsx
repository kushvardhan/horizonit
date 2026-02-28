import React, {
  useState,
  type ChangeEvent,
  type FocusEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import {
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ArrowRight,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

/* ================= TYPES ================= */

type FormDataType = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

type ErrorsType = Partial<Record<keyof FormDataType, string>>;
type TouchedType = Partial<Record<keyof FormDataType, boolean>>;

type ContactItem = {
  text: string;
  link?: string;
};

type ContactCardProps = {
  icon: ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  items: ContactItem[];
};

/* ================= CONTACT CARD ================= */

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  iconBg,
  iconColor,
  title,
  items,
}) => (
  <div className="flex items-start !gap-5 !p-5 rounded-2xl bg-white/80 backdrop-blur border border-slate-200 shadow-sm">
    <div
      className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg} ${iconColor}`}
    >
      {icon}
    </div>

    <div className="flex-1 !space-y-2">
      <p className="text-xs uppercase tracking-widest font-bold text-slate-500">
        {title}
      </p>

      <div className="!space-y-1">
        {items.map((item, i) =>
          item.link ? (
            <a
              key={i}
              href={item.link}
              className="block text-slate-900 font-medium hover:text-purple-600 transition"
            >
              {item.text}
            </a>
          ) : (
            <p key={i} className="text-slate-800 font-medium leading-relaxed">
              {item.text}
            </p>
          )
        )}
      </div>
    </div>
  </div>
);

/* ================= MAIN COMPONENT ================= */

export default function ContactPage() {
  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<ErrorsType>({});
  const [touched, setTouched] = useState<TouchedType>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  /* ---------------- VALIDATION ---------------- */

  const validate = (
    name: keyof FormDataType,
    value: string
  ): string => {
    let error = "";
    return error;
  };

  /* ---------------- HANDLERS ---------------- */

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const key = name as keyof FormDataType;

    const sanitized =
      key === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value;

    setFormData((prev) => ({ ...prev, [key]: sanitized }));

    if (touched[key]) {
      setErrors((prev) => ({
        ...prev,
        [key]: validate(key, sanitized),
      }));
    }
  };

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const key = e.target.name as keyof FormDataType;

    setTouched((prev) => ({ ...prev, [key]: true }));
    setErrors((prev) => ({
      ...prev,
      [key]: validate(key, formData[key]),
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: ErrorsType = {};

    (Object.keys(formData) as (keyof FormDataType)[]).forEach((key) => {
      const err = validate(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    setErrors(newErrors);

    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      message: true,
    });

    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      setErrors({});
      setTouched({});

      setTimeout(() => setSubmitted(false), 1500);
    }, 1000);
  };

  const isFormValid =
    Object.values(formData).every((v) => v.trim() !== "") &&
    Object.values(errors).every((e) => !e);

  return (
    
  <div className="min-h-screen !px-4 sm:!px-6 lg:!px-10 !pb-8 !pt-20 flex flex-col items-center justify-center bg-gradient-to-br from-white via-purple-50 to-blue-50">

      {/* ================= POPUP ================= */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center !px-4">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
          <div className="relative bg-white rounded-2xl !p-6 sm:!p-8 max-w-sm w-full shadow-[0_40px_120px_-30px_rgba(0,0,0,0.35)] animate-[fadeInScale_0.3s_ease-out]">
            <div className="flex items-start !gap-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <CheckCircle size={20} strokeWidth={2.5} />
              </div>

              <div className="!space-y-1">
                <p className="font-bold text-slate-900">
                  Thank you for contacting us
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Your message has been received. Our team will get back to you within
                  24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}


      <div className="w-full max-w-7xl bg-white rounded-[2.5rem] overflow-hidden shadow-[0_40px_120px_-30px_rgba(99,102,241,0.35)] flex flex-col lg:flex-row">

{/* ================= LEFT ================= */}
<div className="relative lg:w-1/2 w-full !p-8 sm:!p-12 lg:!p-16 bg-gradient-to-br from-white via-purple-100/20 to-blue-100/40">

  <div className="!space-y-14">

    {/* BADGE */}
    <div className="inline-flex items-center !gap-2 !px-5 !py-2 rounded-full bg-white border border-purple-200 text-purple-700 text-[11px] font-bold tracking-[0.25em] shadow-sm">
      <Sparkles size={14} />
      AVAILABLE FOR PROJECTS
    </div>

    {/* HERO */}
    <div className="!space-y-6">
      <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold leading-[1.1] text-slate-900">
        Let's build something{" "}
        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          remarkable.
        </span>
      </h1>

      <p className="text-slate-700 max-w-lg text-base sm:text-lg leading-relaxed">
        We design and engineer high-impact digital solutions that scale with
        clarity, performance, and long-term vision.
      </p>
    </div>

    {/* CONTACT CARDS */}
    <div className="grid grid-cols-1 !gap-6 max-w-xl">

      <ContactCard
        icon={<Mail />}
        iconBg="bg-blue-100"
        iconColor="text-blue-600"
        title="Email"
        items={[
          { text: "info@hitcs.in", link: "mailto:info@hitcs.in" },
          { text: "hitcspl@gmail.com", link: "mailto:hitcspl@gmail.com" },
        ]}
      />

      <ContactCard
        icon={<Phone />}
        iconBg="bg-green-100"
        iconColor="text-green-600"
        title="Phone"
        items={[
          { text: "+91 93081 99900", link: "tel:+919308199900" },
          { text: "+91 93085 99900", link: "tel:+919308599900" },
        ]}
      />

      <ContactCard
        icon={<MapPin />}
        iconBg="bg-purple-100"
        iconColor="text-purple-600"
        title="Address"
        items={[
          {
            text:
              "HITCS 206, Giridhar Plaza, Harmu Road, Ranchi-834001, Jharkhand, India",
          },
        ]}
      />
    </div>
  </div>

  {/* Decorative glow */}
  <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 bg-purple-400/30 blur-[160px]" />
</div>



        {/* ================= RIGHT ================= */}
        <div className="lg:w-1/2 w-full !p-8 sm:!p-12 lg:!p-16">
  <form
    onSubmit={handleSubmit}
    className="!space-y-8 font-mono text-slate-900"
  >
    {/* HEADER */}
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
        Send a Message
      </h2>
      <p className="text-slate-600 text-sm !mt-2">
        We usually respond within 24 hours.
      </p>
    </div>

    {/* NAME */}
    <div className="grid grid-cols-1 sm:grid-cols-2 !gap-6">
      <Field
        label="First name"
        name="firstName"
        placeholder="John"
        {...{ formData, errors, touched, handleChange, handleBlur }}
      />
      <Field
        label="Last name"
        name="lastName"
        placeholder="Doe"
        {...{ formData, errors, touched, handleChange, handleBlur }}
      />
    </div>

    {/* EMAIL */}
    <Field
      label="Email"
      name="email"
      type="email"
      placeholder="john@example.com"
      {...{ formData, errors, touched, handleChange, handleBlur }}
    />

    {/* PHONE */}
    <div className="!space-y-1">
      <label className="text-xs font-semibold text-slate-500">
        Phone
      </label>
      <div className="flex items-center rounded-xl border-1 bg-slate-50 focus-within:border-purple-500">
        <span className="!px-4 text-slate-800/80 font-semibold select-none">
          +91
        </span>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="10 digit number"
          inputMode="numeric"
          className="w-full !p-4 bg-transparent placeholder:text-slate-400/80 placeholder:text-regular outline-none font-mono tracking-wider text-[15px] font-medium text-slate-900"
        />
      </div>
      {touched.phone && errors.phone && (
        <p className="text-xs text-red-500 font-semibold">
          {errors.phone}
        </p>
      )}
    </div>

    {/* MESSAGE */}
    <Field
      label="Message"
      name="message"
      textarea
      placeholder="Tell us about your project..."
      {...{ formData, errors, touched, handleChange, handleBlur }}
    />

    {/* BUTTON */}
    <button
  type="submit"
  disabled={!isFormValid || isSubmitting}
  className={`
    w-[60%]  !py-4 rounded-xl font-bold text-lg tracking-wide transition-all
    ${
      isFormValid && !isSubmitting
        ? "bg-gradient-to-r from-slate-900 to-slate-800 text-white cursor-pointer hover:shadow-[0_18px_50px_-20px_rgba(15,23,42,0.8)] active:scale-[0.98]"
        : "bg-slate-700 text-slate-200 cursor-not-allowed"
    }
  `}
>
  {isSubmitting ? "Processing..." : "Send Message"}
</button>

  </form>
</div>

      </div>
      {/* ================= LOCATION SECTION ================= */}
<section className="w-full !mt-24 !px-4 sm:!px-6 lg:!px-10">
  <div className="max-w-6xl !mx-auto !space-y-10">

    {/* Header */}
    <div className="text-center !space-y-3">
      <p className="text-[11px] font-extrabold tracking-[0.35em] text-slate-500 uppercase">
        Location
      </p>

      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
        Ranchi Office
      </h2>

      <p className="text-slate-600 max-w-xl !mx-auto text-sm sm:text-base">
        Visit us at our centrally located workspace in Giridhar Plaza.
      </p>
    </div>

    {/* Framed Map */}
    <div className="relative rounded-[2rem] bg-black !p-2 sm:!p-3 lg:!p-4 shadow-[0_50px_120px_-40px_rgba(0,0,0,0.6)]">

      {/* Inner Frame */}
      <div className="relative overflow-hidden rounded-[1.6rem] bg-slate-900">

        {/* Map */}
        <div className="w-full h-[220px] sm:h-[300px] lg:h-[360px]">
          <iframe
            title="HITCS Location"
            loading="lazy"
            className="
              w-full h-full 
              transition-all duration-500
              sm:grayscale sm:contrast-[1.1] 
              hover:sm:grayscale-0
            "
            src="https://www.google.com/maps?q=Giridhar%20Plaza%20Harmu%20Road%20Ranchi&output=embed"
          />
        </div>

        {/* Address Card */}
        <div
          className="
            mt-4 lg:absolute lg:bottom-4 lg:left-auto lg:right-4 lg:w-[360px]
            bg-white/95 backdrop-blur rounded-xl !p-5 shadow-lg
            flex flex-col gap-2
          "
        >
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-red-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
            </svg>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Office Address
            </p>
          </div>

          <p className="text-slate-900 text-sm font-semibold leading-relaxed">
            HITCS 206, Giridhar Plaza,<br />
            Harmu Road, Ranchi – 834001<br />
            Jharkhand, India
          </p>

          <a
            href="https://www.google.com/maps?q=Giridhar+Plaza+Harmu+Road+Ranchi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-2 text-sm font-bold text-red-600 hover:text-red-800 transition-all duration-300 underline decoration-red-400 decoration-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14 3v2h3.586l-9.293 9.293 1.414 1.414L19 6.414V10h2V3h-7z" />
              <path d="M5 5h4V3H3v6h2V5zM5 19v-4H3v6h6v-2H5zM19 19h-4v2h6v-6h-2v4z" />
            </svg>
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

/* ================= FIELD COMPONENT ================= */

type FieldProps = {
  label: string;
  name: keyof FormDataType;
  type?: string;
  textarea?: boolean;
  placeholder?: string;
  formData: FormDataType;
  errors: ErrorsType;
  touched: TouchedType;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleBlur: (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const Field: React.FC<FieldProps> = ({
  label,
  name,
  type = "text",
  textarea,
  placeholder,
  formData,
  errors,
  touched,
  handleChange,
  handleBlur,
}) => (
  <div className="!space-y-1">
    <label className="text-xs font-semibold text-slate-500">
      {label}
    </label>

    {textarea ? (
      <textarea
        name={name}
        value={formData[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className="w-full min-h-[140px] !p-4 rounded-xl border-2 placeholder:text-slate-400/80 placeholder:text-regular bg-slate-50 focus:border-purple-500 outline-none font-mono tracking-wider text-[15px] font-semibold text-slate-900"
      />
    ) : (
      <input
        name={name}
        type={type}
        value={formData[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className="w-full !p-4 rounded-xl border-2 placeholder:text-slate-400/80 placeholder:text-regular bg-slate-50 focus:border-purple-500 outline-none font-mono tracking-wider text-[15px] font-semibold text-slate-900"
      />
    )}

    {touched[name] && errors[name] && (
      <p className="text-xs text-red-500 font-semibold">
        {errors[name]}
      </p>
    )}
  </div>
);
