import { NextRequest, NextResponse } from "next/server";
import { parse } from "node-html-parser";

async function fetchHTML(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return null
    }
    return await response.text();
  } catch (error) {
    return null;
  }
}

export const POST = async (req: NextRequest) => {

  const { name } = await req.json();
  if (!name)
    return NextResponse.json(
      { error: "Channel url not specified." },
      { status: 400 },
    );
  const BASE_URL = "https://t.me/";
  try {

    const html = await fetchHTML(BASE_URL + name)
    if (typeof html !== "string")
      return NextResponse.json(
        { title: "Try again later!", description: "Something went wrong." },
        { status: 404 },
      );
    const root = parse(html);
    const channelName = root.querySelector("." + "tgme_page_title")?.innerText;
    const channelLogo = root.querySelector("." + "tgme_page_photo_image")
      ?.attributes.src;
    const channelDescription = root.querySelector(
      "." + "tgme_page_description",
    )?.innerText;
    const channelMembers = root.querySelector("." + "tgme_page_extra")?.innerText;
    if (channelMembers?.includes("online")) {
      return NextResponse.json({
        error: "Only telegram channel url are allowed.",
        status: 400
      });
      
    }
    if (
      typeof channelName !== 'string' || channelName === ''
    ) {
      return NextResponse.json(
        { title: "Invalid channel url", description: "Provide a valid channel url name." },
        { status: 404 },
      );
    }
    return NextResponse.json({
      name: channelName?.trim(),
      logo: channelLogo,
      description: channelDescription,
      members: channelMembers?.replace(/[^0-9]/g, ""),
    });

  } catch (error) {
    return NextResponse.json(
      { title: "Try again later!", description: "Something went wrong." },
      { status: 404 },
    );
  }

  


};
