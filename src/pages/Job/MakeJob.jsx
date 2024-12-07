import React, { useState } from "react";
import { postCreateJobQuery } from "../../core/services/mutation/JobMutation";
import { Button } from "@nextui-org/react";
import Back from "../../assets/landing/authBack.png";
import DatePicker from "react-multi-date-picker";
import { motion } from "framer-motion";

const MakeJob = () => {
  const [jobTitle, setJobTitle] = useState();
  const [aboutJob, setAboutJob] = useState();
  const [companyWebSite, setCompanyWebSite] = useState();
  const [companyLinkdin, setCompanyLinkdin] = useState();
  const [workStartDate, setWorkStartDate] = useState();
  const [workEndDate, setWorkEndDate] = useState();
  const [inWork, setInWork] = useState();
  const [companyName, setCompanyName] = useState();

  const CreateJobMutation = postCreateJobQuery();

  const onSubmit = async (e) => {
    e.preventDefault();

    const create = {
      jobTitle: jobTitle,
      aboutJob: aboutJob,
      companyWebSite: companyWebSite,
      companyLinkdin: companyLinkdin,
      workStartDate: workStartDate,
      workEndDate: workEndDate,
      inWork: inWork,
      companyName: companyName,
    };

    CreateJobMutation.mutate(create);
  };

  return (
    <div className="pt-6 max-w-[900px] mx-auto">
      <img
        src={Back}
        alt=""
        className="absolute rotate-180 left-[300px] top-[10px] w-[1000px] opacity-30 -z-10"
      />
      <motion.form
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        onSubmit={onSubmit}
        className="rounded-[25px] py-12 px-4 mx-auto w-[60%] max-lg:w-[80%] z-[999] mt-5
      bg-gradient-to-br from-secondary/20 dark:from-amber-100/80 from-10% to-primary/30 dark:to-cyan-100/80 to-90%
      "
      >
        <h1 className="mx-auto mb-5 text-center font-semibold text-lg text-darkgreen">
          ارسال رزومه{" "}
        </h1>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-3 px-5">
          <input
            placeholder="...توضیحات"
            style={{ boxShadow: "0px 1px 3px 0px #00000033 inset" }}
            className="px-4 pt-1 w-full rounded-md bg-gray-50 dark:bg-white leading-8 text-darkgreen placeholder-sm text-right placeholder-darkgreen/30 font-medium focus:outline outline-primary outline-[1.5px]"
            onChange={(e) => setAboutJob(e.target.value)}
          ></input>

          <input
            placeholder="...عنوان شغل"
            style={{ boxShadow: "0px 1px 3px 0px #00000033 inset" }}
            className="px-4 pt-1 w-full rounded-md bg-gray-50 dark:bg-white leading-8 text-darkgreen placeholder-sm text-right placeholder-darkgreen/30 font-medium focus:outline outline-primary outline-[1.5px]"
            onChange={(e) => setJobTitle(e.target.value)}
          ></input>

       

          <label className="relative text-right text-sm text-gray-400 w-full mt-3">
            <DatePicker
              placeholder="تاریخ اتمام کار"
              onChange={(e) => setWorkEndDate(e.target.value)}
              format="YYYY/MM/DD"
              style={{
                boxShadow: "0px 1px 3px 0px #00000033 inset",
                width: "100%",
                height: "31px",
                border: "0px",
                backgroundColor: "#f9fafb",
                position: "absolute",
                bottom: "0px",
                left: "0px",
                textAlign: "right",
              }}
            />
          </label>
          

          <label className="relative text-right text-sm text-gray-400 w-full mt-3">
            <DatePicker
              placeholder="تاریخ شروع کار"
              onChange={(e) => setWorkStartDate(e.target.value)}
              format="YYYY/MM/DD"
              style={{
                boxShadow: "0px 1px 3px 0px #00000033 inset",
                width: "100%",
                height: "31px",
                border: "0px",
                backgroundColor: "#f9fafb",
                position: "absolute",
                bottom: "0px",
                left: "0px",
                textAlign: "right",
              }}
            />
          </label>

          <input
            placeholder="...لینکدین محل کار "
            style={{ boxShadow: "0px 1px 3px 0px #00000033 inset" }}
            className="px-4 pt-1 w-full rounded-md bg-gray-50 dark:bg-white leading-8 text-darkgreen placeholder-sm text-right placeholder-darkgreen/30 font-medium focus:outline outline-primary outline-[1.5px]"
            onChange={(e) => setCompanyLinkdin(e.target.value)}
          ></input>

          <input
            placeholder="...عنوان محل کار "
            style={{ boxShadow: "0px 1px 3px 0px #00000033 inset" }}
            className="px-4 pt-1 w-full rounded-md bg-gray-50 dark:bg-white leading-8 text-darkgreen placeholder-sm text-right placeholder-darkgreen/30 font-medium focus:outline outline-primary outline-[1.5px]"
            onChange={(e) => setCompanyName(e.target.value)}
          ></input>
        </div>

        <br />
        <button
          Button
          className="bg-green rounded-xl mb-2 text-center mx-auto flex px-4 py-2"
          onChange={() => setInWork(true)}
        >
          اکنون شاغلم
        </button>

        <Button className="bg-green rounded-xl mx-auto flex" type="submit">
          ارسال
        </Button>
      </motion.form>
    </div>
  );
};

export default MakeJob;
