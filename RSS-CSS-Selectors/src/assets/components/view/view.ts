import { Body } from '../data/page-elements/body';
import { Header } from './header/header';
import { Main } from './main/main';
import { Navigation } from './nav/nav';
import { Footer } from './footer/footer';
import { CreateHTMLElement } from './actions/createHTMLelement';
import { AddClassToElement } from './actions/addClass';

class View {
  private container: HTMLElement;
  private wrapper: HTMLElement;
  private header: HTMLElement;
  private main: HTMLElement;
  private nav: HTMLElement;
  private footer: HTMLElement;

  constructor() {
    const { container, wrapper } = Body;
    AddClassToElement.add(document.body, ['font-sans', 'bg-gray-800']);
    this.container = new CreateHTMLElement(container).getElement();
    this.wrapper = new CreateHTMLElement(wrapper).getElement();
    this.header = Header.initialize();
    this.main = new Main().getElement();
    this.footer = Footer.initialize();
    this.nav = new Navigation().getElement();

    document.body.append(this.container);
    this.wrapper.append(this.header, this.main, this.footer);
    this.container.append(this.wrapper, this.nav);
  }

  getElement() {
    return this.container;
  }
}

export { View };
