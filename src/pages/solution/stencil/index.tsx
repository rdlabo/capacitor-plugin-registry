import { HighlightedCode } from "@ionic-internal/components-react";
import SolutionPageLayout from "../components/layout";

import StencilImage from "./assets/logo.png";

import LogoApple from "../assets/apple.png";
import LogoAndroid from "../assets/android.png";
import Image from "next/image";

const framework = {
  id: "stencil",
  name: "Stencil",
  theme: "#4c48ff",
  logo: StencilImage,
};

export const SolutionStencilPage = () => {
  return (
    <SolutionPageLayout framework={framework}>
      <section className="ds-container" id="getting-started">
        <article className="step">
          <sup className="ui-heading-6">01</sup>
          <div className="heading-group">
            <h3 id="install">Install Capacitor.</h3>
            <p>
              Add Capacitor to your project and create a config for your app
            </p>
          </div>
          <div className="code-panel">
            <pre>
              <HighlightedCode
                language="shell-session"
                code={`
npm install @capacitor/core @capacitor/cli
npx cap init [name] [id] --web-dir=www
`}
              />
            </pre>
          </div>
        </article>

        <article className="step">
          <sup className="ui-heading-6">02</sup>
          <div className="heading-group">
            <h3>Build the Web App.</h3>
            <p>
              The compiled web assets will be copied into each Capacitor native
              platform during the next step.
            </p>
          </div>
          <div className="code-panel">
            <pre>
              <HighlightedCode
                language="shell-session"
                code={`
npm run build
`}
              />
            </pre>
          </div>
        </article>

        <article className="step">
          <sup className="ui-heading-6">03</sup>
          <div className="heading-group">
            <h3>Install the native platforms you want to target.</h3>
            <div className="platforms">
              <Image
                src={LogoApple}
                width={LogoApple.width / 2}
                height={LogoApple.height / 2}
                alt="Apple logo"
              />
              <Image
                src={LogoAndroid}
                width={LogoAndroid.width / 4}
                height={LogoAndroid.height / 4}
                alt="Android logo"
              />
            </div>
            <p>
              Capacitor's native projects exist in their own top-level folders
              and should be considered part of your app (check them into source
              control).
            </p>
          </div>
          <div className="code-panel">
            <pre>
              <HighlightedCode
                language="shell-session"
                code={`
npm i @capacitor/ios @capacitor/android
npx cap add android
npx cap add ios
`}
              />
            </pre>
          </div>
        </article>

        <article className="step">
          <sup className="ui-heading-6">04</sup>
          <div className="heading-group">
            <h3>Adding calls to Native APIs</h3>
            <p>
              With Capacitor installed, adding calls to native device features
              is as straight forward as calling other JavaScript methods
            </p>
          </div>
          <div className="code-panel">
            <pre>
              <HighlightedCode
                language="typescript"
                code={`
import { Component, Host, State, h } from '@stencil/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  tag: 'geolocation-page',
  shadow: true,
})
export class  GeolocationPage() {

  @State() loc = null;

  async getCurrentPosition() {
    const loc = await Geolocation.getCurrentPosition();
    this.loc = loc;
  }

  render() {
    return (
      <Host>
        <h1>Geolocation</h1>
        <p>Your location is:</p>
        <p>Latitude: {this.loc?.coords.latitude}</p>
        <p>Longitude: {this.loc?.coords.longitude}</p>

        <button onClick={() => this.getCurrentPosition()}>
          Get Current Location
        </button>
      </Host>
    );
  }
}
`}
              />
            </pre>
          </div>
        </article>
      </section>
      <section id="continue">
        <div className="ds-container">
          <h3>Continue your Capacitor Journey.</h3>
          <p>
            This is only the beginning. Learn more about the Capacitor{" "}
            <a href="/docs/basics/workflow" target="_blank">
              development workflow
            </a>{" "}
            or using more{" "}
            <a href="/docs/apis" target="_blank">
              {" "}
              native APIs
            </a>{" "}
            .
          </p>
        </div>
      </section>
    </SolutionPageLayout>
  );
};

export default SolutionStencilPage;
