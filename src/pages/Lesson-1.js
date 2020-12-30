import React from "react";
import { SectionTitle, Copy } from "../components/Copy";
import { Section, TwoFold } from "../components/Layout";
import CadenceEditor from "../components/CadenceEditor"

export const LessonContent = () => {
  return (
    <Section>
      <SectionTitle>Lesson 1 - Basic Ariphmetics</SectionTitle>
      <Copy>Let's start with the most basic example - addition of two numbers</Copy>
    </Section>
  );
};

export default () => {
  return (
    <TwoFold>
      <LessonContent />
      <CadenceEditor />
    </TwoFold>
  );
};
