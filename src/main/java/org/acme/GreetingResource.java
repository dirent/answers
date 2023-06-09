package org.acme;

import jakarta.json.*;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/answers")
public class GreetingResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public JsonArray hello() {
        JsonArrayBuilder builder = Json.createArrayBuilder();
        for( int i=0; i<10000; i++ ) {
            builder.add( createAnswer("Answer "+i, i, i*5) );
        }
        return builder.build();
    }

    JsonObject createAnswer(String answer, int precision, int duration ) {
        JsonObjectBuilder builder = Json.createObjectBuilder();
        builder.add( "answer", answer ).
                add( "precision", precision ).
                add( "duration", duration );
        return builder.build();
    }
}
