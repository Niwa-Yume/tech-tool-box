import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, PostgrestResponse } from '@supabase/supabase-js';
import { Observable, from, map, throwError, catchError } from 'rxjs';
import { environment } from '../environnement/environnement';

export interface Tool {
  id?: number;
  created_at?: string;
  name: string;
  description: string;
  Categorie?: string;  // Notez le C majuscule ici
  image: string;
  lien: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  getTools(): Observable<Tool[]> {
    return from(this.supabase
      .from('tools')
      .select('*')
      .order('name')
    ).pipe(
      map((response: PostgrestResponse<Tool>) => {
        if (response.error) {
          throw new Error(response.error.message);
        }
        console.log('Raw data from Supabase:', response.data);
        return response.data;
      }),
      catchError(error => {
        console.error('Error fetching tools:', error);
        return throwError(() => new Error('Failed to fetch tools: ' + error.message));
      })
    );
  }

  // ... other methods remain the same
}