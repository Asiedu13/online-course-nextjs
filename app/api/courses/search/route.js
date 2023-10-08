import { NextResponse } from "next/server";
import Courses from '../data.json';

export async function GET( request ) {
    const { searchParams } = new URL( request.url );
    const query = searchParams.get( 'query' )
    
    const filteredCourses = Courses.filter( ( course ) => course.title.toLowerCase().includes( query.toLowerCase() ) );


    return NextResponse.json( filteredCourses );
}