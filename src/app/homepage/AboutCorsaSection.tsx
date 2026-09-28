'use client'
import React from 'react'
import styled from '@emotion/styled'
import { Color, FontVariant } from '@/app/theme'
import { Section, SectionHeader, FullWidthContainer } from './Styles'

const AboutSection = styled(Section)`
  gap: 24px;
`

const Paragraphs = styled.div`
  ${FontVariant.body_md}
  color: ${Color.gray700};
  display: grid;
  gap: 16px;
  max-width: 900px;

  p {
    margin: 0;
  }
  strong {
    font-weight: 700;
  }
`

export const AboutCorsaSection = () => {
  return (
    <FullWidthContainer>
      <AboutSection id="about-corsa-section">
        <SectionHeader title="Why are we named “CORSA”?" />
        <Paragraphs>
          <p>
            CORSA mode is the most aggressive track-focused driving setting found in high-performance vehicles, most
            notably Lamborghini supercars and SUVs, where &quot;corsa&quot; translates from Italian as &quot;race&quot;.
            It is designed for maximum performance. It optimizes performance for maximum speed, precision, and agility.
            Essentially, it&apos;s a &quot;race&quot; mode that unleashes the full potential of the car.
          </p>
          <p>
            We re-interpret “CORSA” as <strong>C</strong>ompiler <strong>O</strong>ptimizations, <strong>R</strong>
            econfigurable and <strong>S</strong>calable <strong>A</strong>rchitectures, where we aim to achieve maximum
            computing performance by unleashing full potential of hardware accelerators and systems via cross-stack
            customization from compiler to reconfigurable architectures and heterogeneous systems.
          </p>
        </Paragraphs>
      </AboutSection>
    </FullWidthContainer>
  )
}
