'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon, Loader2, SearchIcon, CheckCircle2, HelpCircle, ArrowRight, ArrowLeft } from 'lucide-react'

// Simulated generic database data
const genericDatabaseData: Record<string, { status: string; lastUpdated: string }> = {
  'RCT-123-456-7890': { status: 'Under Review', lastUpdated: '2023-08-25' },
  'RCT-234-567-8901': { status: 'Approved', lastUpdated: '2023-08-24' },
  'RCT-345-678-9012': { status: 'Additional Information Required', lastUpdated: '2023-08-23' },
}

const steps = [
  { title: 'Welcome', description: 'Learn about the application status lookup process' },
  { title: 'Enter ID', description: 'Provide your submission ID' },
  { title: 'View Status', description: 'See the current status of your application' },
]

export default function EnhancedApplicationLookup() {
  const [submissionId, setSubmissionId] = useState('')
  const [applicationStatus, setApplicationStatus] = useState<null | { status: string, lastUpdated: string }>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [currentStep, setCurrentStep] = useState(0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Simulate API call to generic database
    await new Promise(resolve => setTimeout(resolve, 1500))

    if (genericDatabaseData[submissionId]) {
      setApplicationStatus(genericDatabaseData[submissionId])
      setCurrentStep(2)
    } else {
      setError("No application found with the provided Submission ID.")
    }

    setIsLoading(false)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <h2 className="text-2xl font-bold mb-4">Welcome to the Application Status Lookup</h2>
            <p className="mb-4">Here&apos;s what you need to know:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Ensure you have your Submission ID ready</li>
              <li>The ID format is RCT-XXX-XXX-XXXX</li>
              <li>Your application status will be displayed instantly</li>
              <li>If you need help, our support team is just a click away</li>
            </ul>
            <Button onClick={() => setCurrentStep(1)} className="w-full">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        )
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="submissionId">Submission ID</Label>
                <div className="relative">
                  <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    id="submissionId"
                    placeholder="e.g. RCT-123-456-7890"
                    value={submissionId}
                    onChange={(e) => setSubmissionId(e.target.value)}
                    className="pl-8"
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Checking Status
                  </>
                ) : (
                  <>
                    Check Status <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
            {error && (
              <Alert variant="destructive" className="mt-4">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </motion.div>
        )
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {applicationStatus && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                  <h3 className="text-xl font-semibold">Application Found</h3>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Current Status:</p>
                  <p className="text-2xl font-bold text-blue-600">{applicationStatus.status}</p>
                  <p className="text-sm text-gray-500 mt-2">Last Updated: {applicationStatus.lastUpdated}</p>
                </div>
                <Alert>
                  <HelpCircle className="h-4 w-4" />
                  <AlertTitle>What&apos;s Next?</AlertTitle>
                  <AlertDescription>
                    We&apos;ll update you via email as your application progresses. If you have any questions, please don&apos;t hesitate to contact our support team.
                  </AlertDescription>
                </Alert>
              </div>
            )}
            <Button onClick={() => setCurrentStep(0)} className="w-full mt-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Check Another Application
            </Button>
          </motion.div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-4 sm:p-6 lg:p-8">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Application Status Lookup</CardTitle>
          <CardDescription className="text-center">
            Track the progress of your scholarship application
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`rounded-full h-8 w-8 flex items-center justify-center ${currentStep >= index ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    {index + 1}
                  </div>
                  <p className="text-xs mt-1 text-center">{step.title}</p>
                </div>
              ))}
            </div>
            <div className="mt-2 h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>
          </div>
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>
        </CardContent>
        <CardFooter>
          <Alert>
            <InfoIcon className="h-4 w-4" />
            <AlertTitle>Need assistance?</AlertTitle>
            <AlertDescription>
              If you have any questions about your application or need further assistance, please contact our customer support team at <a href="mailto:support@scholarfundtest.org" className="font-medium underline">support@scholarfundtest.org</a> or call us at (555) 123-4567.
            </AlertDescription>
          </Alert>
        </CardFooter>
      </Card>
    </div>
  )
}