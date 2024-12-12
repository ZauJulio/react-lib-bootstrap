// storybook-extensions.d.ts

import type { Args, ComponentProps, DecoratorFunction, StoryContext, StoryFn } from '@storybook/react';
import type { AllowedTags } from '@utils';

declare module '@storybook/react' {
  interface Meta<TArgs = Args> {
    title?: string;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    component?: ComponentType<any>;
    args?: Partial<TArgs>;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    parameters?: Record<string, any>;
    decorators?: DecoratorFunction<TRenderer, Simplify<TArgs>>[] | DecoratorFunction<TRenderer, Simplify<TArgs>>;
    tags?: AllowedTags[];
  }
}
