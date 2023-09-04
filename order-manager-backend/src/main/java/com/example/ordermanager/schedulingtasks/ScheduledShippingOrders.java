package com.example.ordermanager.schedulingtasks;

import java.text.SimpleDateFormat;
import java.util.Date;

import com.example.ordermanager.services.ShippingOrderService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;


@Component
public class ScheduledShippingOrders {
    @Autowired
    ShippingOrderService shippingOrderService;
    private static final Logger log = (Logger) LoggerFactory.getLogger(ScheduledShippingOrders.class);

    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");
//    @Scheduled(fixedDelay = 600000)
    @Scheduled(fixedRate = 30000)
    public void reportCurrentTime() {
        shippingOrderService.generateShippingOrdes();
    }
}
