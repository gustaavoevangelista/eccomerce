import { getCategories } from '@/app/api/dbFunctions/user/db';
import { NextResponse } from 'next/server';

export async function GET() {
	const categories = await getCategories();

	if (categories == null) {
		return NextResponse('Categories not found'), { status: 404 };
	}

	return NextResponse.json(categories);
}
