"use client"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SuccessModalProps {
  show: boolean
  onClose: () => void
  message?: string
}

export default function SuccessModal({
  show,
  onClose,
  message = "Your form has been submitted successfully.",
}: SuccessModalProps) {
  // Animation variants for the checkmark
  const checkVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.2,
      },
    },
  }

  // Animation variants for the circle
  const circleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full mx-4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-center mb-6">
          <motion.div
            className="relative h-24 w-24 flex items-center justify-center"
            initial="hidden"
            animate="visible"
          >
            <motion.div className="absolute h-24 w-24 rounded-full bg-green-100" variants={circleVariants} />
            <motion.div
              className="absolute h-16 w-16 rounded-full bg-green-500 flex items-center justify-center"
              variants={circleVariants}
            >
              <Check className="text-white h-10 w-10 stroke-[3]" />
            </motion.div>
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold mb-4">Success!</h3>
        <p className="mb-6 text-gray-700">{message}</p>

        <Button
          onClick={onClose}
          className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-md w-full"
        >
          Close
        </Button>
      </motion.div>
    </div>
  )
}
