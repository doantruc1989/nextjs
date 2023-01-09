import { Inter } from "@next/font/google";
import { Dropdown, Navbar } from "flowbite-react";
import Footera from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/Products";

export default function Home() {
  return (
    <>
      <Navbar
        fluid={true}
        rounded={true}
      >
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            href="/navbars"
          // active={true}
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            About
          </Navbar.Link>
          <Navbar.Link >
            <Dropdown
              label="Dropdown"
              inline={true}
            >
              <Dropdown.Item>
                Dashboard
              </Dropdown.Item>
              <Dropdown.Item>
                Settings
              </Dropdown.Item>
              <Dropdown.Item>
                Earnings
              </Dropdown.Item>
              <Dropdown.Item>
                Sign out
              </Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Pricing
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <Hero />
      <Products />
      <Footera />
    </>
  );
}
