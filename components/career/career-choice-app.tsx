'use client'

import { useState } from 'react'
import { PhoneFrame } from './phone-frame'
import { OnboardingScreen, type StudentProfile } from './onboarding-screen'
import { Dashboard } from './dashboard'

export function CareerChoiceApp() {
  const [profile, setProfile] = useState<StudentProfile | null>(null)

  return (
    <PhoneFrame>
      {profile ? (
        <Dashboard profile={profile} onReset={() => setProfile(null)} />
      ) : (
        <OnboardingScreen onSubmit={setProfile} />
      )}
    </PhoneFrame>
  )
}
