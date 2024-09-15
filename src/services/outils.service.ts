import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Observable, from, map, throwError, catchError } from 'rxjs';
import { environment } from '../environnement/environnement';

// Ajoutez le mot-clé export ici
export interface Tool {
  name: string;
  image: string;
  description: string;
  lien: string;
  categorie: string; // Changement ici
}

@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }
  //Permet de récupérer la liste des outils
  getTools(): Observable<Tool[]> {
    return from(this.supabase
      .from('tools')
      .select('*')
      .order('name')
    ).pipe(
      map((response: any) => {
        if (response.error) {
          console.error('Supabase error:', response.error);
          throw new Error(response.error.message);
        }
        return response.data as Tool[];
      }),
      catchError(error => {
        console.error('Error fetching tools:', error);
        return throwError(() => new Error('Failed to fetch tools: ' + error.message));
      })
    );
  }


  //Permet de rajouter un outil
  addTool(tool: Tool): Observable<any> {
    return from(this.supabase
      .from('tools')
      .insert(tool)
    );
  }


  //Permet de mettre à jour un outil
  updateTool(id: number, tool: Partial<Tool>): Observable<any> {
    return from(this.supabase
      .from('tools')
      .update(tool)
      .eq('id', id)
    );
  }


  //Permet de supprimer un outil
  deleteTool(id: number): Observable<any> {
    return from(this.supabase
      .from('tools')
      .delete()
      .eq('id', id)
    );
  }
}
