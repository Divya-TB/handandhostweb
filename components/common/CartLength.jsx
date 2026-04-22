"use client";

import React from "react";
import { useContextElement } from "@/context/Context";

export default function CartLength() {
  const context = useContextElement();

  const cartProducts =
    context?.cartProducts || [];

  return <>{cartProducts.length}</>;
}