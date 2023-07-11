package org.acme;

import io.quarkus.scheduler.Scheduled;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.websocket.OnClose;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.ServerEndpoint;

import java.io.IOException;
import java.time.LocalTime;


@ApplicationScoped
@ServerEndpoint("/clock")
public class Clock {

    private Session session;

    @OnOpen
    public void onOpen( Session session ) {
        System.out.println( "Opening web socket" );
        this.session = session;
    }

    @Scheduled( every="2s" )
    public void sendCurrentTime() {
        System.out.println( "." );
        if( this.session != null  &&  this.session.isOpen() ) {
            try {
                this.session.getBasicRemote().sendText(LocalTime.now().toString());
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
    }

    @OnClose
    public void onClose( Session session ) {
        System.out.println( "Closing web socket" );
    }
}
