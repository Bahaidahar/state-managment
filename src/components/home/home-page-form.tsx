"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Trash2, Loader, ThumbsUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import Cropper, { Area } from "react-easy-crop";
import getCroppedImg from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "../ui/toast";

const steps = ["Select a file", "Crop the image", "Upload the file"];

const HomePageForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [crop, setCrop] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [input, setInput] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setFile(selectedFile);

    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setPreviewUrl(URL.createObjectURL(selectedFile));
      setCurrentStep(1);
    } else {
      setPreviewUrl(null);
    }
  };

  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleCrop = async () => {
    if (!previewUrl || !croppedAreaPixels) {
      console.error("Preview URL or cropped area pixels are not available");
      return;
    }

    try {
      const croppedImage = await getCroppedImg(previewUrl, croppedAreaPixels);
      setPreviewUrl(croppedImage);
      setZoom(1);
      setCurrentStep(2);
    } catch (error) {
      console.error("Error cropping image", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      console.log("No file selected.");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("File uploaded successfully.");
        handleDelete();
      } else {
        console.log("File upload failed.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      toast({
        description: <Loader />,
      });
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Success",
          description: <ThumbsUp />,
          action: <ToastAction altText="Goto schedule to undo">Ok</ToastAction>,
        });
      }, 4000);
    }
  };

  const handleDelete = () => {
    setFile(null);
    setPreviewUrl(null);
    setInput("");
    setZoom(1);
    setCurrentStep(0);
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1));
  };

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-2xl space-y-4"
    >
      <div className="mb-8">
        <div className="flex justify-between">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <motion.div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  index <= currentStep
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                {index + 1}
              </motion.div>
              <span className="mt-2 text-sm">{step}</span>
            </div>
          ))}
        </div>
        <div className="bg-muted mt-4 h-2 rounded-full">
          <motion.div
            className="bg-primary h-full rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <AnimatePresence mode="wait">
          {currentStep === 0 && (
            <motion.div
              key="step0"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                duration: 0.1,
              }}
            >
              <Input
                value={input}
                type="file"
                accept=".pdf,.jpeg,.png,.zip"
                onChange={handleFileChange}
                className="w-full rounded-lg border-2 border-gray-300 p-2"
              />
            </motion.div>
          )}

          {currentStep === 1 && previewUrl && (
            <motion.div
              key="step1"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                duration: 0.1,
              }}
              className="relative"
            >
              <div className="relative mt-4 h-[300px] w-full overflow-hidden rounded-md border border-gray-200 shadow-lg">
                <Cropper
                  image={previewUrl}
                  crop={crop}
                  zoom={zoom}
                  aspect={16 / 9}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                />
              </div>
              <Button onClick={handleCrop} className="mt-4">
                Crop Image
              </Button>
            </motion.div>
          )}

          {currentStep === 2 && previewUrl && (
            <motion.div
              key="step2"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                duration: 0.1,
              }}
              className="relative"
            >
              <img
                src={previewUrl}
                alt="Cropped preview"
                className="w-full rounded-md shadow-lg"
              />
              <Trash2
                className="absolute -right-2 -top-2 z-10 h-8 w-8 cursor-pointer rounded-full border bg-white p-2 shadow-md transition-all duration-300 ease-in-out hover:scale-110 hover:border-red-500 hover:bg-red-500 hover:text-white hover:shadow-red-400"
                onClick={handleDelete}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-4 flex justify-between">
          {currentStep > 0 && (
            <Button type="button" onClick={handlePrevStep} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
          )}
          {file ? (
            currentStep < steps.length - 1 ? (
              <Button
                type="button"
                onClick={handleNextStep}
                className="ml-auto"
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button type="submit" className="ml-auto" disabled={isSubmitting}>
                {isSubmitting ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Uploading...
                  </motion.div>
                ) : (
                  <>
                    Upload File
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            )
          ) : null}
        </div>
      </form>
    </motion.div>
  );
};

export default HomePageForm;
