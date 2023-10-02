/* eslint-disable @next/next/no-img-element */
"use client";

import { SafeUser } from "@/types";
import { useCallback, useState } from "react";

import Link from "next/link";
import UserMenu from "./UserMenu";
import AuthFormModel from "./model/AuthFormModel";
import ChooseModel from "./model/ChooseModel";
import DestinationModel from "./model/DestinationModel";
import RentModal from "./model/RentModal";

type Props = {
  currentUser?: SafeUser | null;
};

function Navbar({ currentUser }: Props) {
  const [checkType, setIsType] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [rentIsOpen, setRentIsOpen] = useState(false);
  const [chooseMode, setChooseModel] = useState(false);

  const onClose = () => {
    if (isOpen) {
      setIsOpen(false);
    } else return;
  };

  const onCloseRent = () => {
    if (rentIsOpen) {
      setRentIsOpen(false);
    } else return;
  };

  const handleModel = useCallback((value: string) => {
    if (!value) return;

    setIsType(value);
    setChooseModel(false);
    setRentIsOpen(true);
  }, []);

  return (
    <>
      <AuthFormModel isOpen={isOpen} onClose={onClose} />
      <ChooseModel
        checkType={checkType}
        isOpen={chooseMode}
        onClose={() => setChooseModel(false)}
        setIsType={handleModel}
      />
      {checkType === "destinations" ? (
        <DestinationModel isOpen={rentIsOpen} onClose={onCloseRent} />
      ) : (
        checkType === "hotel" && (
          <RentModal isOpen={rentIsOpen} onClose={onCloseRent} />
        )
      )}
      <div className="px-40 py-6">
        <div className="flex items-center justify-between">
          <div>
            <Link href={"/"}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX////u7u4AAADt7e319fX5+fny8vL29vb8/Pzp6enIyMja2trT09NGRkZMTEy+vr7j4+OIiIhYWFh/f3+cnJx1dXUSEhI3Nzenp6fR0dGysrLZ2dnFxcW4uLgZGRleXl4gICA1NTUtLS2RkZFwcHBmZmZ6enoMDAw+Pj6hoaEnJyeFhYWsrKxPT0+Xl5dZWVkXtRD8AAAUgklEQVR4nO1dZ2P6LBAnJIwYR2zde2uX/+//7R5GgEtMoraO2kde1azjxx23OChCphHf080n9ppnGrWXmH2M22v2UmAvUfOmf28C6Mj9J8InwifCJ8InwidCiJDn3U+u+ed3wD+tA1cn4CGSNE6oaYyba/ZSYC8xe43wkjcDe40fEiC3JIB809woBvYaYLBpDIxi0pwgEPsYGP97E8iZCcGhADgRBh2wr+bIyaGEQQKHc+iKBPIQ3rQDd0H45OHjI7w6D28qJHkIbzrEd0H4t3h4d3N1dQLGpyEsMI3Za/ZSkPMYOXyMlT12JwIWNhhF6DYeDA8rG0XoNh6wyY3/DQmA2/+D2OKJ8InwifCJ8Inw5wivbg/zCNhLeQTQ4WPfsYc5o2i9Ooef20s5bqN7k9jHStl0CQJufO0lBz9FwDL72o7x3QiUDfHfjZ7+PsK/FR/mIbzpEN8F4d/n4d/MJn5DmdtPn9SBu1kLsDZiGlj0MA2ujZhGyx4jh49dggBctjmRgIV9nyzGLby2HAH4q573E+ET4RPhE+EfQJhb7HFLhNe2h8Iy38XgInajxhv7m9FKtZstfpH9+roE7l5tQlaz+KoE7h0B03iGB9ckcB7Cyw+xz0cY17IdAOL3+AjRCmNsVJzugJg38ehj9/7SrIR/QEpRVyA0YqoI+IQt37Fu3U/7tUflIY23AkgbdoBEO+zalNLH5iEbCHydeeiGkPo1DNs6+d6jVpvwV4zDL9xPHhN9R1OcbgOeJeCdQaAEwWk5lrxMCT98rCgVg7y50KRtvJJpoUo/FH2uZADinY+OE/hGlsjCLnWMf1ykHEs108BbIXm+nH6Ldj2LEDd+QkAzOA8BOnL/QMS/5/rv8WyIGMZj5pPlATbdNn74fQJ3RzjF/xBBNdxEfnAgn6Zt39vjR0Xov+M3RNgYv/vUQ4siiKLtHxShcNlCRLxohqvMR80ShHhYmtb+tQiXeCcJ8H/4VYhptQzhB3pEhKSGWwrhG+4KWxh2SxC2HwYhVOYh7vQlgcDHuBL4vEibyjbm3yBwIkILx93PqYZg9jHbAVdHkTPEkkIP1xUByru4RTxWIqZ1mlNucZRAMQJx+wZeG1rjD64JCKySehG+SdtnF/facgTxwrEFFfOuTzSBfgdLs95oVA7beDz0CX3E6ImN8IIaAjVhGJFwL00izDYmXE72PQLfQAjv/xyhcNma8n1FoIm/lBDlENAXH5GHvI7HxBCI8Hv02Lk2pRhSHaAMLxg18Qmb489HzrXZG6ADZISnkgrTBPZCTB+Vh6xa6a1rtZdlhRLQAd7GDeLTQIYNLSqCRBywNAHWfIg9M3T5sjVmbRqBEgha74Qi0m7jPvK79ZAv8CdJE2h06DWz+qdtR8nbtQL2u6B4lTbdDbsXB/XxhnNfhPQ10pd3NniNUgTQP1xFZ2+oyXksH4GF/ZPVNdSbZZyTbcN8jgzwGIVf8mJTBFG4s8PzGBKgIqZaoV++Z+Yjx/9iNEl21zCPkmDC5A8bgIDPPzGeg67/xgh4n+di9hAnwkgIW7GqvmfurSEBJHNSY1JG4N4I8/Mu9eXrWqgU0sDtycFNQCCIMZ6JqfpLEfIw7vezHHJtRH30mndjbAn4vIVngwn+lZUKiL2titGJ1hVSytZ5d14dAfaCd6jrMP8ihFJDlLcPETkNc+/sQkOACgvyiTZCm/46hKxxDKDMqxUNQ9V0XSbeIuHo7GiWwN2rTdih/si0rjBZ6CX/3sb0U4T7K0LpwlmQi9vDnFWVnDLVwwJXdpSFeyR8t4J7W6SXboTHg1uIC062UYbAxSpoLbPPjC1IraDztlVQkSWRN5UwKlUrvyZEntKDCNjEyXfaMzPaFvVet4XsQ64zoBmsvhjO8YuaDjMdJf+u+LCSXeNMN6kdg8JHalojCB6P1MfWeMVviPAkHoroIeqtX2q7Xa1uW820+k6qy7iYzxUZJApgteoSoc+4ihcx/W08pH4g3ZqAwgDFNP1zXMxiuT5BPeHd7XYe2uz9bZLt/k08lMkKeRksJGfz1bkOjW4L8T7pqT/7Qt/QVzEhb4fwUmkUng0bYasGfuLSrdAU9wYYywKGB0M4KgGIl5zF+q8O/8LduKPF9DsIhUdCuD90l25WbdIqQzgNkFmDGgnPp/GF2+RcAhohFX+Pmjvn2uYhQD/KYhQ4VUGBy5a0EJl1xJ2Q5t0o8cfP3DMj9Fw4UlmihnvsRntmaFgKEH9WU7akt1Ne0HmeN2Vhb50MVB/lIrgiQjIoR/jylvpZl/Ua5yJkjkY3zK8IuiLCMlsh22SR+tmpaRf1LITcVT2sb77KTb00gqOto5NwZyEkbhQ3N0cYHA+RD1rzXIShG8XBzRGW24r8VvPOQwiTJN7Nq03Y/HyEsjzzDISpJMkpWYyc+yYGPR+hcVjOax9nlbPo6nHdvgoQ+u40M5CoMFdAgsAterg8QsmbJCgOfsvaAvFTCagkyMK+2ULgMfvUVU9oLY+Pi1qFnuO1EZcOGwe3rjYpLe0qbsIfP5GA/Nm3702q1L9GfFjcAfQNWyHbv+AchM4r2tGzEF6Ah/nrFSe0MKfmrBCh82hekHdbhF5p8FvW3ALGcYT0y76mkiK3RBgciSuKm1tbPI4QEGmQsxDC+99DyL9lK2Sp979yAjQIqLTSCiHwaEJ6gyyGHzuErDz4zWuzr49eoxLT0nmI4kolUiViEqHzCyfUK0R4KXsYtvDImis67JwKbNL9Wm9aVVlIoVZHvEJ7SKNWV3123uMa4T/7FZUAKUBwakHJQSFH4jio3CgffcylGjRvnmgr1svBaBgyxDlh6IBAqtYFoQHYg/KJZNeQ2xr2hgpLURz/T/VLtU/EkfYag3hY+UxUmnDuzFNfuKR1p5vlW199UnpaMuuadnwZQcSDiSDKx+nV5qEMQCPn0ai1uTy/9Bt5GsRp47O1bG42r6/t1fplbpMtC+SKlAuwLabNVqUaHw4hnEMM9VvLN4EU1MZZ65pQG8gA1GXUZ1ExgnMQ8qgyWC8KWdND1vXPCqng2v6zEnItBOUH8qGq8vcWMbUIY7OS12aJGzMVCLlTNN0SBCchFHIj4DVfyusSQmoRmiHfTnb15WAYh+pGoM4cyB1CIKVRMoavyCC0AJucyDpq0eoCIWlb2v9+hlBmXPvH7dsY2XRm+I4X/zbNz1EMKsNKhpDKJR4Uj0I4OhMD2jMDK2AFKH5PeOhRN+BvP0NISOPryGqoHHLuAlRaDf2AcxZINXKMACPMi8cf6/pCbcD0jJ3ZJtsxbb3K+5D5BqFcEwceTfQDhEJ8RodbBQ/bntNskkF/7xjCoLox3sG7rOjz7SeT2oW2IyGFZJTcowSsioQ/QMjDE7yT2TriKm9yvBhETkQpflyrG3F7Yz+zVt60NXLaB7dKayJICAJ6Qa4qDIgLLOr0JIR56xYUDY4XlTQHkXEijhaDKP3oV9+Wq91QXhNGz2U8daWU7bjioWcB97gioDIzX1R0bZp5sajaJEdfW68OjpPQ+ODHQCj9OIoi8QhBwG5ZzqWySL6nnDLxI6y0pnrMJkqQxW1X0/GmKvr5x3RPsJyHoh8uzOxqSdSTb8l9ToFHo8uqc05oPeJ5U+70cbMfcuoQSgawgMms0dFiEGkJvNF+uRzDStQd0h0Ae6D6zEqY+hn4gUvYJXzSC3KM+mjoItCGPsLgjGoTfZ9SMwX/jeSOLuIsrKryPfFUQYriXqLX56HLoS4Vc1POAbJrwBLYjKZMnmZhpGA1pfC5Fzs+LZLC0viQ2mRkjyinlbvEhNYJ3mkIW85u7YEnyTVC99GtW8eXvX/nlDoW1vQHlVrqetIIufF+R/kIjvDQN3NwISVSdgfEfB+oGCGVxU0OYVEcFVHdATebXh1CKYtz5AGh1jZde6J9SYY4535tTog5j4fW3ChrKhHGC/vNcRFCSpgfUk4twp6TpXeolnd+0gF3aUAsQsnYL+HBOO6rxdOqktGW6jNxL7bORyhfMKpKWyWBkLrkpJ4U9jQSGII35UxbBsZrdrtFeyGiYEFxRXQHInepr/WFQKgUwB5xN9W6Uk/qZ1uqdirw3ItVeraUyiFKBj9RYcIWAXboOm29+iMrAgkNx23hZHFzHEs7sSAW4G7IhU85dFxcJgjd0so89gzCSDqJfThHZX5Km+al8i3gAvM2zpfCLMK0rqVkoV+nDqGzsPqwIGHUaUCH417zRc61GHlunWSYFtFZrPaQmrBBtEFSmwgynswiVBMkRtRp3jcUabX6qUNKH0zRaZCHwCHMr840ArJCtr4UzJglSuo6UWtiFQnygU5RtaW29HJbkQ8HsL6G6gWYwKVaNsjUlypXtEZhKm2/Vh/fRWaxiEOPpry+1La015awYxTYNBV39PRV7h6TYwGWY4XFIj71LQs+tBoCIevEzFunS0wqmPlIimOb8HQlg/yqm/E+zNEk7aw9M6H+QDd0k9hN+21VL0+Kl5xfsUkluVvEc0HBXHeMgJLol4RoVntJhPpEgh7LrF51PmLuEkHgxTgXQdIKY4tEwKZmnziFycm6LpMUCAkuaBUGgptkkAmQ831CNLWGmyDUh59EjKRWr5ZDHgDXfnn44nkIE03VNAk4mlZsBmEqH/NVRaYGqCtsmfWoJ2YquNDPHDYEpNxwVUiplO45opGTinWULGsbhKBUZ/s9hImK6zkeglWQJTcIYTHCK2GUJMHyCNqypqEAPMkoubRwHzVP8aF+iYLh2ydJOYOwCh2l7yFMbPOYWB7G7qO6IlsidNGr0CZy88EqAYiQEzE7T5xl+EoUOyj4d/vZ1GwdUlDuJKZ1kjDQCNPLPvuARq3+uQgNL0zAR+HU9sw8pC6/8aqyGCxedCYbaQzd41ObpnciabZbuFL+jpFbFM7USz5Upa2kHxphnK7y2NZqC6WnzkKYiGTf8dBN7UVScs4RKLeoSgsuOxBn0fQMARDrtpJLDkTN6hAl+Z88dYxNCmEojMkysxfinZ2AMGUPEymt2KUW5Ng15aZWAESvHk1lMcAwWxJDl7AzDHMg/tkuKQspfXc4BUznBIHGTLoDmZq5veZRrj3MP9U04VjF3CbA8n2ai6CgZEfS7zsfdmufBpoj0I9DKU8e0yxsil+Qhy9EvUAIospbC7OL6FGa/vETWmkVDI1qIAYYJZcoWH/ZGElPsk/O42gbCqDHM32NptdwFY+Uk7NQog5PsaloMQv3cqA7Fc7Sm3HeeBYByIN5pqX8Vq4dW1dY7BTbu9H01jvHkq8JQv0p4Ak0uMmbOtQrHdCBLAwOA90HNX+1lwdiGTx5i+JGa6Vjk4Zcs4cTsU1oBoEBVRw9UbSvb3FnMTTXnEDWjQFnkTMgjRRCAvZZ2OANoO6hbHww07Fh4uNoCgVrkJ2RfJs4t7yzR2fnaWQugtNqfxiZKcucj2hLCZjDsQghQh8kIRcmeIMMq+geAe1VV2k2roP4xMuL8xeCkmJn1EjGt15FhwiO81BG7pQCV95R+7QX3UQxp8saHsLxSD7PnAu6iLRQgTrvpoofNV9ejAHNqzFeMzOKgsnNZnNAXDD4o1oMoBOsi8JB6JRGCCxfMuXEp9x4/Ev8WqBK6lw6w7M0AeBkmNZjJty99I4SoLqszaOHfNUIYV3rq+kAdXxVqIX/A53LfeOtlv4WOtzbt6QuJXFphM781K01BaGCUa8aITxyziAMgLl51ScO5Re6b5DrB4EQZ8v4mmebOJ3wYa85RdMxE1YbNaCCJEL9JeChrFSmP//QthVJeVyRds/mq1YFEDAZhgThEQRl55u6JM7CdmFgMiVA13+lcz3QkrWTL8GdiHPBcl+83Tlcd12rYg/dPFXIIjsrD2ALkiTOQdcoKkfgZKLkhFZasX3Z9k2aFOQkPtLBDXCodf5ffDyVkZg3m/KDyzbOtOJa/TQBdOETWmHB+JwZC05dBPjJ0x0AgfEkOgSYtBrJHEcwV37DPU4cgHq9Zvnad6qwEqQ7AI8ZkCdcV//hnNaH9gbLbB26F0LP5VzkwlZC3nmqE5ORMx1IucXdf7p6IrMZcaKOVbD6Z7exubY7IKRgadQ40nDH0QJlOpB3GMaQp3/rCIVUl1+z2stbJbQ074EQnlUZmsfA6pY9ctTW0+xwto1RKqSbJirOrEwDlXcHhD532n/hmQApyOHrQU2Ubc007gGxBA5s2TVP/ijiIYIbxHQHfAZ8lJhmO5DdL6PdBF/Fd932gGcIeD89AvZEHlpqmSpdCo7A2JsTWoEBeQ/teNoObFIAdeKJUBJWq5HPCU8TyCC0/bjdCa2gvmBgt0M4QXTpQlcjTIEd2FU5PeoW5hUhX/GE1oyIOz2/je2mHWfDm6Cexk5IstcOwXt9bM7NveyWlYvGFs7yzbhBCNTGp5MJ2AG/MRgMxrEQTv8YgdsjzAyxcx9fkOkAMOp9KKXnd+AuCDND7BzQvUUIAiRwIuCDIgSWr8pMB5yy3KGfdeAuCNMdgMut9qhmx9fXR0SY5qGLhV6o7YD82Z1+vDViRn85wuP2EKTUmDFXYb1VjcIAERZ4PzRXBuGhPbzZCa0ulm8h+xiSR1te4gDVkjdPfOynJ7RSU8c5mXdVVWnZKJ59YNwt/v8huG9kN+V5B8LeT9bN3jgyHSieCY/5XzrZaBDq/RB/FaHPeHDNDtwfoacSeX8b4XU78ET4RHi9E1ovZa5KCKDDxy50Qmv6/94VnNB6qQNUr06goAo6KwD5J0Mml352gOrVCeTMhNsmGa5O4P+J8KYduAvCq/Pwt+XartuBuyD8+zx8fISQQI5Xcds0yo0IoBt4bXkEcnp3ca8N3Dec/aue9xPhE+ET4RPhE+HPEV74hNZDtyW3A9cnUHpCK7HZgPNPaD3zscsSgJd+i1N1RQI5M+EZ4/8BhI8fPR1DeNMhvgvCJw8v2oG7IPxbuvTu5urqBJz5P/OE1pP/WfCdCVjYj+qX+uUEnnmaJ8InwifCJ8InwvMQ/tl1i5xR/AOxBSRwM4TfqDa5CIH/AF2b0cbW667DAAAAAElFTkSuQmCC"
                alt=""
                className="rounded-md h-14"
              />
            </Link>
          </div>
          <div className="z-50 flex items-center space-x-12">
            <Link
              href={"/"}
              className="font-semibold uppercase cursor-pointer hover:underline"
            >
              Home
            </Link>
            <Link
              href={"/destinations"}
              className="font-semibold uppercase cursor-pointer hover:underline"
            >
              Destinations
            </Link>
            <Link
              href={"/hotel"}
              className="font-semibold uppercase cursor-pointer hover:underline"
            >
              Hotels
            </Link>

            {!currentUser && (
              <p
                onClick={() => setIsOpen(true)}
                className="font-semibold uppercase cursor-pointer hover:underline"
              >
                Become a Hoister
              </p>
            )}
            {currentUser ? (
              <UserMenu
                setRentIsOpen={() => setChooseModel(true)}
                currentUser={currentUser}
              />
            ) : (
              <p
                onClick={() => setIsOpen(true)}
                className="border px-4 py-1.5 rounded-md border-black font-semibold cursor-pointer"
              >
                Sign up
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
