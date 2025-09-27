import { Accordion as RadixAccordion } from "radix-ui";

export const Accordion = () => {
  return (
    <RadixAccordion.Root defaultValue={"item-1"} type="single" collapsible>
      <RadixAccordion.Item value="item-1">
        <RadixAccordion.Header>
          <RadixAccordion.Trigger>Trigger</RadixAccordion.Trigger>
        </RadixAccordion.Header>
        <RadixAccordion.Content>Content</RadixAccordion.Content>
      </RadixAccordion.Item>
    </RadixAccordion.Root>
  );
};
