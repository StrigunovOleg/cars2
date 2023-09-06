import { NextResponse } from "next/server";

import getData from "../../dbGet";

export async function GET(req, res) {

    return NextResponse.json(getData(-1));
}
