import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const key = process.env.INDEXNOW_KEY;

    if (!key) {
        return NextResponse.json(
            { error: "IndexNow key not configured" },
            { status: 500 },
        );
    }

    const body = await request.json();
    const urls: string[] = body.urls || [];

    if (urls.length === 0) {
        return NextResponse.json({ error: "No URLs provided" }, { status: 400 });
    }

    const payload = {
        host: "www.richiereach.tech",
        key,
        keyLocation: `https://www.richiereach.tech/${key}.txt`,
        urlList: urls,
    };

    const response = await fetch("https://api.indexnow.org/indexnow", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
    });

    return NextResponse.json({
        status: response.status,
        submitted: urls.length,
    });
}
